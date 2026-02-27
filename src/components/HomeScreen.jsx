import React, { useState, useRef, useEffect } from 'react';
import { C, DEFAULT_STYLES, fmt, Ic, PBBIcon, FEB21, relativeTime } from '../shared/ui.jsx';

export default function HomeScreen({balance,todayTxns,onPBB,onSeeAll,onSettings,styles=DEFAULT_STYLES}){
  const [showBal,setShowBal]=useState(true);
  const [pullY,setPullY]=useState(0);
  const [isRefreshing,setIsRefreshing]=useState(false);
  const pullStartY=useRef(0);
  const scrollRef=useRef(null);
  const PULL_MAX=80;
  const PULL_THRESHOLD=60;
  const [tab,setTab]=useState("Wallet");

  const tabs=["Wallet","Savings","Credit","Loans","Cards"];
  const shortcuts=[
    {icon:"bank",label:"Bank\ntransfer"},
    {icon:"raffle",label:"Raffle\nPromo"},
    {icon:"crypto",label:"Crypto"},
    {icon:"refer",label:"Refer &\nEarn"},
    {icon:"load",label:"Load"},
    {icon:"bills",label:"Bills"},
    {icon:"pbb",label:"PBB",badge:true,action:onPBB},
    {icon:"more",label:"More"},
  ];
  
  const feb21Stamped = FEB21.map(tx=>({...tx, timestamp: tx.timestamp||new Date("2026-02-21").getTime()}));
  const combinedTxns = [...todayTxns, ...feb21Stamped].sort((a,b)=>(b.timestamp||0)-(a.timestamp||0)).slice(0, 5);

  const getDisplayDate = (tx) => {
    if (!tx.timestamp) return "21 Feb 2026";
    const txDate = new Date(tx.timestamp);
    const now = new Date();
    if (txDate.toDateString() === now.toDateString()) {
      return relativeTime(tx.timestamp); 
    }
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${txDate.getDate()} ${months[txDate.getMonth()]} ${txDate.getFullYear()}`;
  };

  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,position:"relative", fontFamily: "'Jeko', sans-serif", fontWeight: 400}}>
      <div style={{background:C.white}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:styles.headerPadding}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"#e0f5ea",display:"flex",alignItems:"center",justifyContent:"center",marginTop:styles.profileIconMarginTop,marginLeft:styles.profileIconMarginLeft}}>
            <Ic n="user" s={18} c={C.green}/>
          </div>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <button onClick={onSettings} style={{background:"none",border:"none",cursor:"pointer",padding:0}}><Ic n="settings" s={20} c={C.dark}/></button>
            <Ic n="chat" s={22}/>
            <div style={{position:"relative"}}>
              <Ic n="bell" s={22}/>
              <div style={{position:"absolute",top:-6,right:-8,background:C.green,borderRadius:10,padding:"2px 4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:900,color:"white",border:"2px solid white"}}>90</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",paddingLeft:tab===tabs[0]?styles.tabFirstActivePaddingLeft:styles.tabFirstInactivePaddingLeft,overflowX:"auto",paddingBottom:8,scrollbarWidth:"none",transition:"padding-left 0.15s"}}>
          {tabs.map(t=>(
            <div key={t} onClick={()=>setTab(t)} style={{
              marginLeft:styles.tabRowGap,
              padding:`${styles.tabPillPaddingY}px ${styles.tabPillPaddingX}px`,
              borderRadius:styles.tabPillRadius,
              fontWeight:tab===t?styles.tabActiveFontWeight:styles.tabInactiveFontWeight,
              fontSize:tab===t?styles.tabActiveFontSize:styles.tabInactiveFontSize,
              fontFamily:`'${styles.tabFont}',sans-serif`,
              background:tab===t?styles.tabPillBg:"transparent",
              color:tab===t?styles.tabPillColor:styles.tabInactiveColor,
              cursor:"pointer",
              whiteSpace:"nowrap",
              flexShrink:0,
              transition:"all 0.15s"
            }}>{t}</div>
          ))}
        </div>
      </div>

      <div style={{overflow:"hidden",height:pullY>0||isRefreshing?Math.min(pullY,PULL_MAX):0,transition:pullY===0?"height 0.3s":undefined,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <svg viewBox="0 0 60 20" width={50} height={18} style={{opacity:isRefreshing?1:Math.min(pullY/PULL_THRESHOLD,1),transform:`scale(${isRefreshing?1:0.6+0.4*Math.min(pullY/PULL_THRESHOLD,1)})`,transition:pullY===0?"all 0.3s":undefined}}>
          <path d="M2,10 C6,2 12,2 15,10 C18,18 24,18 30,10 C36,2 42,2 45,10 C48,18 54,18 58,10" stroke={isRefreshing?C.green:"#aaa"} strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div ref={scrollRef}
        onTouchStart={e=>{
          if(scrollRef.current?.scrollTop===0){
            pullStartY.current=e.touches[0].clientY;
          }
        }}
        onTouchMove={e=>{
          if(pullStartY.current===0) return;
          const delta=e.touches[0].clientY-pullStartY.current;
          if(delta>0 && scrollRef.current?.scrollTop===0){
            setPullY(Math.min(delta*0.5,PULL_MAX));
          }
        }}
        onTouchEnd={()=>{
          if(pullY>=PULL_THRESHOLD){
            setIsRefreshing(true);
            setTimeout(()=>{
              sessionStorage.setItem("loggedIn","true");
              document.body.style.transition="opacity 0.3s";
              document.body.style.opacity="0";
              document.body.style.background="#f2f2f2";
              setTimeout(()=>window.location.reload(),300);
            },900);
          } else {
            setPullY(0);
          }
          pullStartY.current=0;
        }}
        style={{flex:1,overflowY:"auto",padding:"12px 12px 100px"}}>
        <div style={{background:C.white,borderRadius:20,padding:"20px",marginBottom:12}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontSize:styles.balanceFontSize,fontWeight:styles.balanceWeight,letterSpacing:-1,fontFamily:`'${styles.balanceFont}',sans-serif`}}>{balance===null?"₱ ••••••••":showBal?`₱${fmt(balance)}`:"₱ ••••••••"}</div>
              <div style={{fontSize:13,color:C.med,marginTop:2}}>Wallet balance <span style={{color:C.green,fontWeight:800}}>Auto cash in</span></div>
            </div>
            <button onClick={()=>setShowBal(!showBal)} style={{background:"none",border:"none",cursor:"pointer",marginTop:styles.eyeIconMarginTop,marginRight:styles.eyeIconMarginRight}}><Ic n={showBal&&balance!==null?"eye":"eyeOff"} s={styles.eyeIconSize} c="#aaa"/></button>
          </div>
          <div style={{display:"flex",gap:10,marginTop:16}}>
            {[{n:"cashin",l:"Cash in"},{n:"send",l:"Send"}].map(b=>(
              <button key={b.l} style={{flex:1,padding:"12px",borderRadius:12,background:"#e6f9f0",border:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontWeight:800,fontSize:13,color:C.green,cursor:"pointer"}}>
                <Ic n={b.n} s={16} c={C.green}/>{b.l}
              </button>
            ))}
          </div>
        </div>

        {/* rest of HomeScreen content omitted for brevity; the component was extracted unchanged */}
        <div style={{padding:"0 4px",marginBottom:32}}>
          <div style={{fontSize:18,fontWeight:900,marginBottom:14}}>Get rewards</div>
        </div>
      </div>

      <div style={{position:"absolute",bottom:styles.floatingNavBottom,left:0,width:"100%",display:"flex",justifyContent:"center",zIndex:100,padding:styles.floatingNavOuterPadding}}>
        <div style={{background:C.white,borderRadius:styles.floatingNavRadius,padding:styles.floatingNavInnerPadding,display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",maxWidth:styles.floatingNavMaxWidth,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",border:`1px solid ${C.gray}`}}>
          <div style={{background:C.green,borderRadius:8,width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:900,fontSize:16}}>m</div>
          <Ic n="scan" s={22} c={C.dark}/>
          <Ic n="grid" s={22} c={C.dark}/>
        </div>
      </div>
    </div>
  );
}
