import { useState, useRef, useEffect } from "react";
import React from "react";

// --- STEP 1: Add this component at the top ---
const SplashScreen = ({ message }) => (
  <div style={{
    position: 'fixed', inset: 0, backgroundColor: '#000',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    alignItems: 'center', zIndex: 10000,
    paddingTop: '3vh'
    
  }}>
    {/* Image zoomed 50% more to 300px */}
    <img src="/mayasplashscreen.jpg" alt="Maya" style={{ width: '53vh', height: 'auto' }} />
    {message && <p style={{ color: '#2ff29e', marginTop: '20px', fontWeight: '800', fontFamily: 'sans-serif' }}>{message}</p>}
  </div>
);

const GlobalStyle = () => (
  <style>{`
    /* ─── CEREBRI SANS PRO (Standard App Font) ─── */
    @font-face {
      font-family: 'CerebriBook';
      src: url('/CerebriSansPro-Book.otf') format('opentype'); 
    }
    @font-face {
      font-family: 'CerebriBold';
      src: url('/CerebriSansPro-Bold.otf') format('opentype'); 
    }

    /* ─── JEKO (Numbers, Balances, Login) ─── */
    @font-face {
      font-family: 'JekoLight';
      src: url('/fonnts.com-Jeko_Light.ttf') format('truetype');
    }
    @font-face {
      font-family: 'JekoRegular';
      src: url('/fonnts.com-Jeko_Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'JekoMedium';
      src: url('/Jeko-Medium.otf') format('opentype');
    }
    @font-face {
      font-family: 'JekoBold';
      src: url('/fonnts.com-Jeko_Bold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'JekoBlack';
      src: url('/fonnts.com-Jeko_Black.ttf') format('truetype');
    }

    /* Default App Font */
    body { 
      font-family: 'CerebriBook', sans-serif; 
    }
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    input, button, textarea { font-family: inherit; }
    
    ::-webkit-scrollbar { width: 0; height: 0; }
    .txn-scroll::-webkit-scrollbar { width: 5px; }
    .txn-scroll::-webkit-scrollbar-track { background: transparent; }
    .txn-scroll::-webkit-scrollbar-thumb { background: #aaa; border-radius: 10px; }
    .txn-scroll::-webkit-scrollbar-thumb:hover { background: #888; }
    
    input::-ms-reveal, input::-ms-clear { display: none; }
    input::-webkit-credentials-auto-fill-button { display: none !important; }
    input[type='password']::-webkit-textfield-decoration-container { display: none; }
    input::-webkit-contacts-auto-fill-button, input::-webkit-caps-lock-indicator { display: none !important; }
  `}</style>
);

const C = {
  mint:"#2ff29e", green:"#00b464", purple:"#4929aa", wine:"#1f155f",
  white:"#fff", bg:"#f2f2f2", gray:"#e8e8e8", dark:"#111",
  med:"#555", light:"#999",
};

const fmt = (n) => Number(n).toLocaleString("en-PH",{minimumFractionDigits:2,maximumFractionDigits:2});

const Ic = ({n,s=22,c=C.dark}) => {
  const p = {stroke:c,fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"};
  const m = {
    bank: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.4741 1.31486C12.1781 1.15546 11.8219 1.15546 11.5259 1.31486L1.77587 6.56522C1.45198 6.73964 1.25 7.07781 1.25 7.44568V9.1958C1.25 9.46102 1.35536 9.71537 1.54289 9.90291C1.73043 10.0904 1.98478 10.1958 2.25 10.1958H3.45569V17.8398C3.45569 18.3921 3.9034 18.8398 4.45569 18.8398H19.5427C20.095 18.8398 20.5427 18.3921 20.5427 17.8398V10.1958H21.75C22.3023 10.1958 22.75 9.74809 22.75 9.1958V7.44568C22.75 7.07781 22.548 6.73964 22.2241 6.56522L12.4741 1.31486ZM5.45569 16.8398V10.1958H8.48474V16.8398H5.45569ZM10.4847 16.8398V10.1958H13.5138V16.8398H10.4847ZM15.5138 16.8398V10.1958H18.5427V16.8398H15.5138Z" fill={c}/><path d="M22.75 20.8049H1.25V22.8049H22.75V20.8049Z" fill={c}/></svg>,
    raffle: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    crypto: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11.7172 4.22185L5.55753 11.6176C8.56781 13.1002 11.9747 13.4393 15.1627 12.6432L11.7172 4.22185ZM14.5391 14.8192C12.1204 15.2444 9.62447 15.1106 7.25018 14.4151L11.8281 19.9117L14.5391 14.8192ZM12.01 22.68C12.0065 22.68 12.003 22.68 11.9995 22.68C11.7026 22.68 11.4211 22.5481 11.2311 22.32L3.1691 12.6401C2.8603 12.2694 2.8603 11.731 3.1691 11.3602L11.2311 1.68034C11.4211 1.45222 11.7026 1.32031 11.9995 1.32031C12.0028 1.32031 12.006 1.32033 12.0093 1.32036C12.3033 1.31748 12.5938 1.44419 12.7919 1.68507L14.4073 3.64871L20.8299 11.3602C21.1387 11.731 21.1387 12.2694 20.8299 12.6401L14.1646 20.6429L12.7926 22.3144C12.594 22.5564 12.3034 22.6826 12.01 22.68Z" fill={c}/></svg>,
    refer: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/></svg>,
    load: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M13.7688 18.4841H8.29187V16.1841H13.7688V18.4841Z" fill={c}/><path fillRule="evenodd" clipRule="evenodd" d="M17.3852 1.61037L12.0853 1.60254L11.556 1.6033L11.1053 1.60254L6.61346 1.60998C4.87369 1.61286 3.46484 3.02404 3.46484 4.76382V19.243C3.46484 20.9848 4.87687 22.3968 6.61869 22.3968H17.3806C19.1224 22.3968 20.5344 20.9848 20.5344 19.243V4.76421C20.5344 3.02421 19.1252 1.61294 17.3852 1.61037ZM15.4419 20.3968C16.0791 20.3968 16.5957 19.8803 16.5957 19.243V4.76374C16.5957 4.12726 16.0803 3.61098 15.4438 3.6099L11.5545 3.6033L6.61702 3.61044C5.98042 3.61135 5.46484 4.12768 5.46484 4.76428V19.243C5.46484 19.8006 5.86036 20.2658 6.38615 20.3734C6.46126 20.3888 6.53903 20.3968 6.61869 20.3968H15.4419Z" fill={c}/></svg>,
    bills: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M18.8912 2.38281H18.8513H16.8533H5.10742C3.45057 2.38281 2.10742 3.72596 2.10742 5.38281L2.10742 18.9211C2.10742 20.578 3.45057 21.9211 5.10742 21.9211H15.8513C17.5082 21.9211 18.8513 20.578 18.8513 18.9211V13.8997H21.8912V5.38281C21.8912 3.72596 20.548 2.38281 18.8912 2.38281ZM16.8513 4.38281L5.10742 4.38281C4.55514 4.38281 4.10742 4.83053 4.10742 5.38281L4.10742 18.9211C4.10742 19.4734 4.55514 19.9211 5.10742 19.9211H15.8513C16.4036 19.9211 16.8513 19.4734 16.8513 18.9211L16.8513 4.38281ZM14.4553 9.3332H6.50367V7.0332H14.4553V9.3332ZM6.50367 13.8054H14.4553V11.5054H6.50367V13.8054Z" fill={c}/></svg>,
    more: <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>,
    eye: <svg width={s} height={s} viewBox="0 0 23 19" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M18.2603 6.18475C19.7244 7.33417 21.0288 8.80397 22.2033 10.46C22.3547 10.6734 22.4429 10.9067 22.4429 11.1091C22.4429 11.3116 22.3511 11.5501 22.1979 11.7659C19.3921 15.7191 15.846 18.6091 11.151 18.6091C6.68206 18.6091 3.25404 15.9907 0.514609 12.3295C0.21885 11.9342 0 11.5598 0 11.1091C0 10.6585 0.203279 10.3061 0.49061 9.92091C1.52313 8.53661 2.65362 7.30024 3.90102 6.29654L1.86047 3.38234L3.74452 2.06311L5.80592 5.00709C7.0879 4.29609 8.48102 3.82645 10.001 3.66828V0H12.301V3.66828C13.7585 3.81996 15.0994 4.25806 16.3375 4.92074L18.3385 2.06311L20.2225 3.38234L18.2603 6.18475ZM11.151 16.3091C7.76846 16.3091 4.97522 14.3949 2.47506 11.1091C4.97498 7.82356 7.76853 5.90913 11.151 5.90913C14.5329 5.90913 17.3313 7.8271 19.8271 11.1091C17.3312 14.3912 14.5329 16.3091 11.151 16.3091Z" fill={c}/><path d="M11.1381 7.60913C9.20506 7.60913 7.63806 9.17613 7.63806 11.1091C7.63806 13.0421 9.20506 14.6091 11.1381 14.6091C13.0711 14.6091 14.6381 13.0421 14.6381 11.1091C14.6381 9.17613 13.0711 7.60913 11.1381 7.60913Z" fill={c}/></svg>,
    eyeOff: <svg width={s} height={s} viewBox="0 0 22 12" fill="none"><path d="M9.7501 8.2439C8.40241 8.10938 7.16444 7.75972 6.02548 7.2465L4.30494 10.2266L2.13987 8.97656L3.85647 6.00333C2.39599 4.97711 1.12729 3.68182 0.0180664 2.27328L1.98216 0.726562C4.35726 3.74257 7.2282 5.80548 11.0001 5.80548C14.772 5.80548 17.643 3.74257 20.0181 0.726562L21.9822 2.27328C20.853 3.70711 19.5586 5.02358 18.0649 6.05834L19.7497 8.97656L17.5847 10.2266L15.8868 7.28573C14.7721 7.77754 13.5632 8.11284 12.2501 8.2439V11.4999H9.7501V8.2439Z" fill={c}/></svg>,
    cashin: <svg width={s} height={s} viewBox="0 0 24 24" {...p} strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></svg>,
    send: <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><polygon points="22,2 15,22 11,13 2,9"/></svg>,
    bell: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    chat: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    wallet: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><circle cx="16" cy="12" r="2" fill={c}/></svg>,
    scan: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,
    grid: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    back: <svg width={s} height={s} viewBox="0 0 24 24" {...p} strokeWidth="2.5"><polyline points="15,18 9,12 15,6"/></svg>,
    check: <svg width={s} height={s} viewBox="0 0 24 24" {...p} strokeWidth="3"><polyline points="20,6 9,17 4,12"/></svg>,
    user: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z" fill={c}/><path fillRule="evenodd" clipRule="evenodd" d="M21.2687 18.8411C21.2687 17.272 19.9967 16 18.4276 16H5.53133C3.98493 16 2.73132 17.2536 2.73132 18.8V19.1887C2.73132 20.7351 3.98493 21.9887 5.53132 21.9887H18.4687C20.0151 21.9887 21.2687 20.7351 21.2687 19.1887V18.8411ZM4.73132 19.1887L4.73132 18.8C4.73132 18.3582 5.0895 18 5.53133 18H18.4276C18.8921 18 19.2687 18.3766 19.2687 18.8411V19.1887C19.2687 19.6305 18.9105 19.9887 18.4687 19.9887H5.53132C5.08949 19.9887 4.73132 19.6305 4.73132 19.1887Z" fill={c}/></svg>,
    settings: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    close: <svg width={s} height={s} viewBox="0 0 24 24" {...p} strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    card: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  };
  return m[n] || <svg width={s} height={s}/>;
};

const PBBIcon = ({size=24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#ddd" strokeWidth="0.5"/>
    <ellipse cx="8.5" cy="14" rx="4.5" ry="4.5" fill="#1a1a8c" opacity="0.85"/>
    <ellipse cx="15.5" cy="14" rx="4.5" ry="4.5" fill="#cc0000" opacity="0.85"/>
    <ellipse cx="12" cy="14" rx="4.5" ry="4.5" fill="#ffd700" opacity="0.72"/>
  </svg>
);

// FEB 21 transactions from screenshots
const FEB21 = [
  {id:"h1", label:"+639053064476",           time:"11:30 PM", amount:2700,  positive:true,  sub:"Received money from"},
  {id:"h2", label:"PBB Save Princess x500",  time:"05:54 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h3", label:"PBB Save Princess x500",  time:"05:54 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h4", label:"PBB Save Princess x500",  time:"05:54 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h5", label:"PBB Save Princess x500",  time:"05:54 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h6", label:"PBB Save Princess x500",  time:"05:53 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h7", label:"PBB Save Princess x500",  time:"05:53 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h8", label:"PBB Save Princess x500",  time:"05:53 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h9", label:"PBB Save Princess x10",   time:"05:53 PM", amount:10,    positive:false, sub:"Purchased on"},
  {id:"h10",label:"PBB Save Princess x500",  time:"05:53 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h11",label:"PBB Save Princess x500",  time:"05:52 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h12",label:"PBB Save Princess x500",  time:"05:52 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h13",label:"PBB Save Princess x500",  time:"05:52 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h14",label:"PBB Save Princess x500",  time:"05:52 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h15",label:"PBB Save Princess x500",  time:"05:51 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h16",label:"PBB Save Princess x500",  time:"05:51 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h17",label:"PBB Save Princess x500",  time:"05:51 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h18",label:"PBB Save Princess x500",  time:"05:51 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h19",label:"PBB Save Princess x500",  time:"05:51 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h20",label:"PBB Save Princess x500",  time:"05:49 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h21",label:"PBB Save Princess x500",  time:"05:49 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h22",label:"PBB Save Princess x500",  time:"05:49 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h23",label:"PBB Save Princess x500",  time:"05:49 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h24",label:"PBB Save Princess x500",  time:"05:49 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h25",label:"PBB Save Princess x500",  time:"05:49 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h26",label:"PBB Save Princess x500",  time:"05:48 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h27",label:"PBB Save Princess x500",  time:"05:48 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h28",label:"PBB Save Princess x500",  time:"05:48 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h29",label:"PBB Save Princess x500",  time:"05:48 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h30",label:"PBB Save Princess x500",  time:"05:48 PM", amount:500,   positive:false, sub:"Purchased on"},
  {id:"h31",label:"Maya Savings",            time:"09:27 AM", amount:15000, positive:true,  sub:"Received money from"},
];

const relativeTime = (ts) => {
  const now = Date.now();
  const diffMs = now - ts;
  const diffMins = Math.floor(diffMs / 60000);
  const txDate = new Date(ts);
  const nowDate = new Date(now);
  const sameDay = txDate.getFullYear()===nowDate.getFullYear() &&
                  txDate.getMonth()===nowDate.getMonth() &&
                  txDate.getDate()===nowDate.getDate();
  if(!sameDay) {
    const h=txDate.getHours(), m=String(txDate.getMinutes()).padStart(2,"0");
    const ampm=h>=12?"PM":"AM"; const h12=((h%12)||12);
    return `${h12}:${m} ${ampm}`;
  }
  if(diffMins < 1) return "Just now";
  if(diffMins < 60) return `${diffMins} min${diffMins>1?"s":""} ago`;
  const diffHrs = Math.floor(diffMins / 60);
  return `${diffHrs} hour${diffHrs>1?"s":""} ago`;
};

const TxRow = ({tx, isToday}) => {
  const [,tick]=useState(0);
  useEffect(()=>{
    if(!isToday||!tx.timestamp) return;
    const iv=setInterval(()=>tick(t=>t+1),30000);
    return ()=>clearInterval(iv);
  },[isToday,tx.timestamp]);
  const displayTime = isToday && tx.timestamp ? relativeTime(tx.timestamp) : tx.time;
  return (
    <div style={{padding:"6px 20px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div>
          <div style={{fontSize:12,color:C.light,marginBottom:3,fontWeight:600}}>{tx.sub||(tx.positive?"Received money from":"Purchased on")}</div>
          <div style={{fontSize:15,fontWeight:800,color:C.dark}}>{tx.label}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:12,color:C.light,marginBottom:3,fontWeight:600}}>{displayTime}</div>
          <div style={{fontSize:15,fontWeight:900,color:tx.positive?C.green:C.dark}}>{tx.positive?"":"-"} ₱{fmt(tx.amount)}</div>
        </div>
      </div>
    </div>
  );
};

const DateChip = ({label}) => (
  <div style={{display:"flex",alignItems:"center",gap:10,padding:"14px 20px",background:C.white}}>
    <div style={{flex:1,height:1,background:C.gray}}/>
    <div style={{background:C.dark,color:C.white,borderRadius:30,padding:"6px 18px",fontSize:14,fontWeight:800,whiteSpace:"nowrap"}}>{label}</div>
    <div style={{flex:1,height:1,background:C.gray}}/>
  </div>
);

// ── SETTINGS MODAL ─────────────────────────────────────────────────────────────
const SettingsModal = ({balance, onClose, onSaveBalance, onAddTxn, onClearToday, daysLeft, chancesLeft, maxChances, onSavePBB, fastMode, onSetFastMode}) => {
  const [view, setView] = useState("main");
  const [newBal, setNewBal] = useState(String(balance));
  const [form, setForm] = useState({label:"",amount:"",time:"",positive:false});
  const [newDays, setNewDays] = useState(String(daysLeft));
  const [newChances, setNewChances] = useState(String(chancesLeft));
  const [newMax, setNewMax] = useState(String(maxChances));

  const iStyle = {width:"100%",border:`1.5px solid ${C.gray}`,borderRadius:10,padding:"11px 14px",fontSize:15,fontWeight:600,outline:"none",background:C.bg,marginTop:6,color:C.dark};
  const btnPrimary = {width:"100%",padding:"13px",borderRadius:12,border:"none",background:C.green,color:C.white,fontWeight:900,fontSize:15,cursor:"pointer",marginTop:10};
  const btnGray = {width:"100%",padding:"13px",borderRadius:12,border:"none",background:"#ccc",color:C.white,fontWeight:800,fontSize:14,cursor:"pointer",marginTop:8};
  const row = {padding:"15px 0",borderBottom:`1px solid ${C.gray}`,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"};
  const titles = {main:"⚙️ Hidden Settings", editBal:"💰 Edit Balance", addTxn:"📋 Add Transaction", editPBB:"🗳️ Edit PBB Stats"};

  return (
    <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.65)",zIndex:600,display:"flex",alignItems:"flex-end"}}>
      <div style={{background:C.white,borderRadius:"24px 24px 0 0",width:"100%",maxHeight:"88%",overflowY:"auto",padding:"24px 22px 36px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <span style={{fontSize:18,fontWeight:900}}>{titles[view]}</span>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",padding:4}}><Ic n="close" s={22} c={C.med}/></button>
        </div>

        {view==="main" && <>
          <div style={row} onClick={()=>setView("editBal")}>
            <span style={{fontSize:14,fontWeight:800}}>Edit Wallet Balance</span><span style={{color:C.light,fontSize:18}}>›</span>
          </div>
          <div style={row} onClick={()=>setView("addTxn")}>
            <span style={{fontSize:14,fontWeight:800}}>Add Transaction</span><span style={{color:C.light,fontSize:18}}>›</span>
          </div>
          <div style={row} onClick={()=>setView("editPBB")}>
            <span style={{fontSize:14,fontWeight:800}}>Edit PBB Stats</span><span style={{color:C.light,fontSize:18}}>›</span>
          </div>
          <div style={{...row}}>
            <span style={{fontSize:14,fontWeight:800}}>⚡ Delays</span>
            <div style={{display:"flex",gap:6}}>
              {[{v:false,l:"Default"},{v:true,l:"Fast"}].map(o=>(
                <div key={String(o.v)} onClick={()=>onSetFastMode(o.v)}
                  style={{padding:"6px 14px",borderRadius:20,border:`2px solid ${fastMode===o.v?C.green:C.gray}`,background:fastMode===o.v?C.green:C.white,color:fastMode===o.v?"white":C.med,fontWeight:800,fontSize:12,cursor:"pointer",transition:"all 0.15s"}}>
                  {o.l}
                </div>
              ))}
            </div>
          </div>
          <div style={{...row,borderBottom:"none"}} onClick={()=>{onClearToday();onClose();}}>
            <span style={{fontSize:14,fontWeight:800,color:"#e74c3c"}}>🗑️ Clear Today's Transactions</span>
          </div>
        </>}

        {view==="editBal" && <>
          <div style={{fontSize:13,color:C.med,marginBottom:4,fontWeight:700}}>Current balance</div>
          <div style={{fontSize:24,fontWeight:900,marginBottom:18}}>₱{fmt(balance)}</div>
          <label style={{fontSize:13,fontWeight:800,color:C.med}}>New Balance (₱)</label>
          <input style={iStyle} type="number" value={newBal} onChange={e=>setNewBal(e.target.value)} placeholder="e.g. 5000.00"/>
          <button style={btnPrimary} onClick={()=>{onSaveBalance(parseFloat(newBal)||0);onClose();}}>Save Balance</button>
          <button style={btnGray} onClick={()=>setView("main")}>← Back</button>
        </>}

        {view==="addTxn" && <>
          <label style={{fontSize:13,fontWeight:800,color:C.med}}>Transaction Label</label>
          <input style={iStyle} value={form.label} onChange={e=>setForm({...form,label:e.target.value})} placeholder="e.g. PBB Save Princess x500"/>
          <label style={{fontSize:13,fontWeight:800,color:C.med,marginTop:14,display:"block"}}>Amount (₱)</label>
          <input style={iStyle} type="number" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} placeholder="e.g. 500"/>
          <label style={{fontSize:13,fontWeight:800,color:C.med,marginTop:14,display:"block"}}>Time</label>
          <input style={iStyle} value={form.time} onChange={e=>setForm({...form,time:e.target.value})} placeholder="e.g. 05:52 PM"/>
          <label style={{fontSize:13,fontWeight:800,color:C.med,marginTop:14,display:"block"}}>Type</label>
          <div style={{display:"flex",gap:10,marginTop:8}}>
            {[{v:false,l:"Purchased (deduct)"},{v:true,l:"Received (add)"}].map(o=>(
              <div key={String(o.v)} onClick={()=>setForm({...form,positive:o.v})}
                style={{flex:1,padding:"10px 6px",borderRadius:10,border:`2px solid ${form.positive===o.v?C.green:C.gray}`,background:form.positive===o.v?"#e6f9f0":C.white,textAlign:"center",cursor:"pointer",fontSize:12,fontWeight:800,color:form.positive===o.v?C.green:C.med}}>
                {o.l}
              </div>
            ))}
          </div>
          <button style={btnPrimary} onClick={()=>{
            if(!form.label||!form.amount) return;
            onAddTxn({id:"m"+Date.now(),label:form.label,time:form.time||"--:-- --",amount:parseFloat(form.amount)||0,positive:form.positive,sub:form.positive?"Received money from":"Purchased on"});
            onClose();
          }}>Add Transaction</button>
          <button style={btnGray} onClick={()=>setView("main")}>← Back</button>
        </>}

        {view==="editPBB" && (()=>{
          const parsedChances = parseInt(newChances)||0;
          const parsedMax = parseInt(newMax)||30;
          const chancesOverMax = parsedChances > parsedMax;
          return <>
            <div style={{fontSize:13,color:C.med,marginBottom:16,fontWeight:700,lineHeight:1.6}}>
              Current: <strong style={{color:C.dark}}>{daysLeft} day{daysLeft!==1?"s":""} left</strong> · <strong style={{color:C.dark}}>{chancesLeft}/{maxChances} chances</strong>
            </div>
            <label style={{fontSize:13,fontWeight:800,color:C.med}}>Days Till Voting Ends</label>
            <input style={iStyle} type="number" min="0" value={newDays} onChange={e=>setNewDays(e.target.value)} placeholder="e.g. 3"/>
            <label style={{fontSize:13,fontWeight:800,color:C.med,marginTop:14,display:"block"}}>Chances Left to Vote</label>
            <input style={{...iStyle,borderColor:chancesOverMax?"#d08893":C.gray}} type="number" min="0" value={newChances} onChange={e=>setNewChances(e.target.value)} placeholder="e.g. 25"/>
            {chancesOverMax&&<div style={{color:"#d08893",fontSize:12,fontWeight:700,marginTop:5}}>⚠️ Chances left cannot exceed max chances ({parsedMax})</div>}
            <label style={{fontSize:13,fontWeight:800,color:C.med,marginTop:14,display:"block"}}>Max Chances (denominator)</label>
            <input style={iStyle} type="number" min="1" value={newMax} onChange={e=>setNewMax(e.target.value)} placeholder="e.g. 30"/>
            <button style={{...btnPrimary,background:chancesOverMax?"#aaa":C.green,cursor:chancesOverMax?"not-allowed":"pointer"}} onClick={()=>{
              if(chancesOverMax) return;
              onSavePBB({days:parseInt(newDays)||0, chances:parsedChances, max:parsedMax});
              onClose();
            }}>Save PBB Stats</button>
            <button style={btnGray} onClick={()=>setView("main")}>← Back</button>
          </>;
        })()}
      </div>
    </div>
  );
};

// ── TRANSACTIONS SCREEN ────────────────────────────────────────────────────────
const TransactionsScreen = ({onBack, todayTxns}) => (
  <div style={{height:"100%",display:"flex",flexDirection:"column",background:C.white, fontFamily: "'JekoLight', sans-serif"}}>
    <div style={{background:C.white,display:"flex",alignItems:"center",padding:"12px 20px",gap:8, position: "relative", zIndex: 30}}>
      <button onClick={onBack} style={{background:"none",border:"none",cursor:"pointer",padding:4}}><Ic n="back" s={22}/></button>
      <span style={{fontSize:17,fontWeight:900,flex:1,textAlign:"center"}}>Transactions</span>
      <div style={{width:30}}/>
    </div>
    <div className="txn-scroll" style={{flex:1,overflowY:"auto",background:C.white}}>
      {todayTxns.length > 0 && (
        <div>
          <div style={{position:"sticky", top: 0, zIndex: 20, background: C.white, boxShadow: "0 -2px 0 white, 0 2px 0 white"}}>
            <div style={{height:8,background:C.white}}/>
            <DateChip label="Today"/>
          </div>
          {[...todayTxns].reverse().map(tx=><TxRow key={tx.id} tx={tx} isToday={true}/>)}
        </div>
      )}
      <div>
        <div style={{position:"sticky", top: 0, zIndex: 20, background: C.white, boxShadow: "0 -2px 0 white, 0 2px 0 white"}}>
          <div style={{height:8,background:C.white}}/>
          <DateChip label="February 21, 2026"/>
        </div>
        {FEB21.map(tx=><TxRow key={tx.id} tx={tx}/>)}
      </div>
    </div>
  </div>
);

// ── LOGIN ──────────────────────────────────────────────────────────────────────
const LoginScreen = ({onLogin, fastMode}) => {
  const [pw,setPw]=useState("");
  const [show,setShow]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [loginAttempted,setLoginAttempted]=useState(false);
  
  // Clean Keyboard & Viewport Detectors
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [vpHeight, setVpHeight] = useState('100%');
  const inputRef = useRef(null);

  useEffect(() => {
    const updateLayout = () => {
      // visualViewport is highly accurate on Android Chrome for keyboard tracking
      const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      setVpHeight(h + 'px');
      
      // Typical mobile screen is 700px+. When keyboard opens, it drops under 550px.
      if (h < 550) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
    };

    const vp = window.visualViewport;
    if (vp) vp.addEventListener('resize', updateLayout);
    else window.addEventListener('resize', updateLayout);
    
    // Initial check
    updateLayout();

    return () => {
      if (vp) vp.removeEventListener('resize', updateLayout);
      else window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const showRequired = loginAttempted && pw.length === 0;
  // Exact hex requested by you
  const boxBorderColor = showRequired ? '#d08893' : C.gray;
  const labelColor = showRequired ? '#d08893' : C.green;

  const handleLogin = () => {
    if(!pw) {
      setLoginAttempted(true);
      return;
    }
    setLoading(true);
    const delay = fastMode ? 0 : 500 + Math.random() * 1000;
    setTimeout(() => {
      setLoading(false);
      if(pw === "Carl123__--") {
        onLogin();
      } else {
        setError(true);
      }
    }, delay);
  };

  const LoginBtn = (
    <button onClick={handleLogin} disabled={!pw||loading} style={{width:"100%",padding:"16.5px",borderRadius:14,border:"none",fontSize:16,fontWeight:900,color:C.white,background:pw?C.green:"#a1dfbf",cursor:pw&&!loading?"pointer":"default",transition:"background 0.2s",opacity:loading?0.7:1}}>
      Log in
    </button>
  );

  // OUTER WRAPPER: Locks strictly to the Viewport Height so the bottom never gets hidden by the keyboard
  return (
    <div style={{
      display:"flex", flexDirection:"column", height: vpHeight, 
      background:C.white, position:"relative", fontFamily: "'JekoMedium', sans-serif",
      overflow: "hidden" 
    }}>
      
      {loading && <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.35)",zIndex:200,borderRadius:34}}/>}
      
      {error && (
        <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",borderRadius:34}}>
          <div style={{background:C.white,borderRadius:24,padding:"32px 24px 24px",width:"100%",textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
            <div style={{width:90,height:90,margin:"0 auto 20px",position:"relative"}}>
              <div style={{width:64,height:78,background:"#111",borderRadius:10,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2,boxShadow:"2px 4px 12px rgba(0,0,0,0.3)"}}>
                <div style={{fontSize:24,fontWeight:900,color:C.green,fontFamily:"monospace"}}>m</div>
              </div>
              <div style={{position:"absolute",bottom:-4,left:"50%",transform:"translateX(-50%)",width:72,height:16,background:"transparent",borderRadius:"50%",border:"3px solid #aaa",boxShadow:"0 2px 8px rgba(0,0,0,0.2)"}}/>
              <div style={{position:"absolute",top:2,right:8,fontSize:16,color:C.dark,fontWeight:900,lineHeight:1}}>/ /</div>
            </div>
            <div style={{fontSize:20,fontWeight:900,color:C.dark,marginBottom:12,lineHeight:1.3}}>We're unable to log<br/>you in</div>
            <div style={{fontSize:13,color:C.med,lineHeight:1.6,marginBottom:20}}>Username and password do not match. Please try again. If username and password do not work, your account may have been disabled.</div>
            <div style={{height:1,background:C.gray,marginBottom:16}}/>
            <button onClick={()=>setError(false)} style={{width:"100%",padding:"15px",borderRadius:30,background:C.green,border:"none",fontSize:16,fontWeight:800,color:C.white,cursor:"pointer"}}>Close</button>
          </div>
        </div>
      )}

      {/* Top Right Help Icon */}
      <div style={{position:"absolute", top: 24, right: 24, zIndex: 10}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12.02 8.00391C11.0291 8.00391 10.2227 8.80898 10.2227 9.78009V9.98879H8.22266V9.78009C8.22266 7.68471 9.94438 6.00391 12.02 6.00391C14.0724 6.00391 15.775 7.66591 15.775 9.73809C15.775 11.0011 15.1366 12.1785 14.0782 12.8676L12.7911 13.7054V14.4868H10.7911V12.621L12.987 11.1914C13.4785 10.8714 13.775 10.3246 13.775 9.73809C13.775 8.79018 12.9877 8.00391 12.02 8.00391ZM12.7949 16.001V18.001H10.7949V16.001H12.7949Z" fill="black"/>
        </svg>
      </div>

      {/* ─── MAIN SCROLLABLE AREA ─── */}
      <div style={{
        flex: 1, overflowY: "auto", overflowX: "hidden", 
        display: "flex", flexDirection: "column", 
        padding: "24px",
        // Crucial: Gives enough room at the bottom so Switch Account isn't permanently blocked by the sticky Log In button
        paddingBottom: isKeyboardOpen ? "100px" : "24px" 
      }}>
        
        {/* Top Block: Logo, Number, Name, Password Box, Forgot Password */}
        <div style={{
          display:"flex", flexDirection:"column", alignItems:"center", width: "100%", 
          marginTop: isKeyboardOpen ? "127px" : "175px",
          transition: "margin-top 0.3s ease"
        }}>
          
          <div style={{marginBottom: 17}}>
            <svg width="142" height="42" viewBox="0 0 71 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9846 0.5C14.3885 0.499563 12.8556 1.13491 11.7139 2.27011L12.3328 3.46698L12.079 3.67486C11.5427 2.72918 10.774 1.94165 9.8484 1.38948C8.92281 0.837307 7.87211 0.53947 6.79931 0.525193C3.43217 0.525193 0.708736 3.52368 0.708736 7.0387V14.5979C0.706114 14.6623 0.716653 14.7266 0.739676 14.7866C0.7627 14.8467 0.797719 14.9012 0.842509 14.9468C0.887299 14.9924 0.940883 15.028 0.999893 15.0515C1.0589 15.0749 1.12206 15.0856 1.18535 15.0829H3.63024C3.68929 15.0829 3.74773 15.071 3.80221 15.0478C3.85669 15.0246 3.90608 14.9907 3.94754 14.9479C3.98901 14.9051 4.02174 14.8543 4.04377 14.7986C4.06579 14.7428 4.0767 14.6832 4.07588 14.6231V6.95681C4.07588 5.21189 5.11571 3.80715 6.88594 3.80715C8.53856 3.80715 9.72078 5.06701 9.72078 6.92531V13.2246C9.71657 13.2871 9.72492 13.3498 9.74534 13.4088C9.76576 13.4679 9.79783 13.5221 9.83956 13.5681C9.88128 13.6141 9.93178 13.6509 9.98799 13.6763C10.0442 13.7018 10.1049 13.7153 10.1665 13.716H12.4999C12.5614 13.7153 12.6222 13.7018 12.6784 13.6763C12.7346 13.6509 12.7851 13.6141 12.8268 13.5681C12.8685 13.5221 12.9006 13.4679 12.921 13.4088C12.9414 13.3498 12.9498 13.2871 12.9456 13.2246V6.92531C12.9182 6.52302 12.973 6.11931 13.1067 5.73969C13.2403 5.36006 13.4499 5.01277 13.7221 4.71975C13.9943 4.42672 14.3232 4.19434 14.6882 4.03726C15.0531 3.88018 15.4461 3.80182 15.8423 3.80715C17.6063 3.80715 18.5905 5.23709 18.5905 6.95681V14.6105C18.5953 14.7352 18.6478 14.8532 18.7369 14.9391C18.8259 15.025 18.9444 15.0721 19.0671 15.0703H21.481C21.5445 15.074 21.6081 15.0639 21.6676 15.0409C21.727 15.0178 21.781 14.9822 21.826 14.9364C21.871 14.8906 21.906 14.8356 21.9286 14.7751C21.9513 14.7146 21.9612 14.6499 21.9576 14.5853V7.0261C21.9329 3.49848 19.358 0.5 15.9846 0.5Z" fill="#00A651"/>
              <path d="M38.1396 0.772125H35.8861C35.8234 0.767832 35.7606 0.776377 35.7014 0.797218C35.6423 0.818058 35.5883 0.850743 35.5427 0.893192C35.4971 0.935641 35.461 0.986927 35.4367 1.04381C35.4124 1.10069 35.4003 1.16191 35.4013 1.2236V1.52665L36.2008 2.76357L35.9868 2.97385C35.3251 2.20998 34.5048 1.59404 33.5808 1.16735C32.6569 0.740672 31.6507 0.513125 30.6299 0.5C28.6616 0.5 26.7739 1.26823 25.382 2.63568C23.9902 4.00314 23.2083 5.8578 23.2083 7.79167C23.2083 9.72554 23.9902 11.5802 25.382 12.9476C26.7739 14.3151 28.6616 15.0833 30.6299 15.0833C31.6548 15.0725 32.6654 14.8461 33.5938 14.4194C34.5221 13.9927 35.3467 13.3755 36.012 12.6095L36.2008 12.7579L35.4013 14.0443V14.3288C35.4005 14.3916 35.4125 14.4539 35.4365 14.512C35.4606 14.5702 35.4962 14.623 35.5414 14.6674C35.5866 14.7118 35.6404 14.7468 35.6996 14.7705C35.7587 14.7941 35.8222 14.8059 35.8861 14.805H38.1396C38.2042 14.8086 38.2688 14.7987 38.3293 14.7761C38.3897 14.7534 38.4447 14.7185 38.4904 14.6735C38.5362 14.6286 38.5718 14.5746 38.5948 14.5152C38.6179 14.4558 38.6279 14.3923 38.6243 14.3288V1.2236C38.6273 1.16137 38.6167 1.09924 38.593 1.04144C38.5694 0.983631 38.5333 0.931513 38.4873 0.888653C38.4413 0.845792 38.3864 0.813195 38.3264 0.793084C38.2664 0.772974 38.2027 0.765823 38.1396 0.772125ZM30.6299 11.9354C29.5097 11.9354 28.4353 11.4981 27.6432 10.7199C26.8511 9.94164 26.4061 8.8861 26.4061 7.78548C26.4061 6.68486 26.8511 5.62933 27.6432 4.85108C28.4353 4.07283 29.5097 3.63561 30.6299 3.63561C31.7501 3.63561 32.8244 4.07283 33.6166 4.85108C34.4087 5.62933 34.8537 6.68486 34.8537 7.78548C34.8537 8.8861 34.4087 9.94164 33.6166 10.7199C32.8244 11.4981 31.7501 11.9354 30.6299 11.9354Z" fill="#00A651"/>
              <path d="M69.8062 0.772125H67.5527C67.49 0.767832 67.4272 0.776377 67.3681 0.797218C67.309 0.818058 67.2549 0.850743 67.2093 0.893192C67.1637 0.935641 67.1276 0.986927 67.1033 1.04381C67.079 1.10069 67.067 1.16191 67.068 1.2236V1.52665L67.8674 2.76357L67.6534 2.97385C66.9917 2.20998 66.1714 1.59404 65.2475 1.16735C64.3235 0.740672 63.3174 0.513125 62.2965 0.5C60.3282 0.5 58.4405 1.26823 57.0487 2.63568C55.6569 4.00314 54.875 5.8578 54.875 7.79167C54.875 9.72554 55.6569 11.5802 57.0487 12.9476C58.4405 14.3151 60.3282 15.0833 62.2965 15.0833C63.3214 15.0725 64.332 14.8461 65.2604 14.4194C66.1888 13.9927 67.0133 13.3755 67.6786 12.6095L67.8674 12.7579L67.068 14.0443V14.3288C67.0672 14.3916 67.0791 14.4539 67.1032 14.512C67.1272 14.5702 67.1629 14.623 67.2081 14.6674C67.2533 14.7118 67.307 14.7468 67.3662 14.7705C67.4254 14.7941 67.4888 14.8059 67.5527 14.805H69.8062C69.8708 14.8086 69.9355 14.7987 69.9959 14.7761C70.0564 14.7534 70.1113 14.7185 70.1571 14.6735C70.2028 14.6286 70.2384 14.5746 70.2615 14.5152C70.2845 14.4558 70.2946 14.3923 70.2909 14.3288V1.2236C70.294 1.16137 70.2833 1.09924 70.2597 1.04144C70.236 0.983631 70.2 0.931513 70.154 0.888653C70.108 0.845792 70.053 0.813195 69.993 0.793084C69.933 0.772974 69.8693 0.765823 69.8062 0.772125ZM62.2965 11.9354C61.1763 11.9354 60.102 11.4981 59.3099 10.7199C58.5177 9.94164 58.0727 8.8861 58.0727 7.78548C58.0727 6.68486 58.5177 5.62933 59.3099 4.85108C60.102 4.07283 61.1763 3.63561 62.2965 3.63561C63.4168 3.63561 64.4911 4.07283 65.2832 4.85108C66.0753 5.62933 66.5204 6.68486 66.5204 7.78548C66.5204 8.8861 66.0753 9.94164 65.2832 10.7199C64.4911 11.4981 63.4168 11.9354 62.2965 11.9354Z" fill="#00A651"/>
              <path d="M53.1127 0.922775H50.8682C50.5083 0.922775 50.3131 1.12023 50.3131 1.31151V8.14201C50.3448 8.61956 50.276 9.09848 50.1114 9.5472C49.9468 9.99592 49.6901 10.4042 49.3582 10.7453C49.0262 11.0863 48.6266 11.3524 48.1857 11.5258C47.7447 11.6993 47.2724 11.7762 46.8 11.7516C44.836 11.7516 43.5674 10.2708 43.5674 8.14201V1.31151C43.5674 1.12023 43.2624 0.922775 43.0672 0.922775H40.6763C40.5772 0.931175 40.4842 0.974829 40.4139 1.04599C40.3435 1.11715 40.3004 1.21122 40.2921 1.31151V8.09882C40.2725 9.873 40.948 11.5829 42.1709 12.8547C43.3938 14.1265 45.0647 14.8569 46.8183 14.8861C48.4957 14.8864 50.1156 14.2677 51.3744 13.1461L51.4964 13.2634L50.5022 14.6332V15.1823C50.5022 16.583 48.4224 17.3666 47.2086 17.3666H46.434C46.3088 17.3598 46.186 17.4034 46.0923 17.4877C45.9987 17.5721 45.9417 17.6904 45.9339 17.817V20.0507C45.9447 20.1761 46.0025 20.2926 46.0955 20.3764C46.1885 20.4601 46.3096 20.5047 46.434 20.5011H47.2086C50.917 20.5011 53.625 18.3168 53.625 14.2012V1.31151C53.6168 1.25187 53.597 1.19446 53.5667 1.14259C53.5365 1.09072 53.4964 1.04542 53.4488 1.00929C53.4012 0.97316 53.347 0.946915 53.2893 0.932068C53.2316 0.91722 53.1716 0.91406 53.1127 0.922775Z" fill="#00A651"/>
            </svg>
          </div>
          <div style={{fontSize:23.5,fontWeight:800,marginBottom:11}}>+63 994 304 0344</div>
          <div style={{fontSize:14,color:C.med,letterSpacing:0, marginBottom: 36}}>CARL CEDRIC</div>
          
          <div style={{width:"100%", marginBottom: showRequired ? 4 : 24}}>
            <div style={{position:"relative", height: "56px", background:C.white,borderRadius:14, border:`1.5px solid ${boxBorderColor}`,transition:"border-color 0.2s", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "16px"}}>
              <div style={{fontSize:12,color:labelColor,fontWeight:800,marginTop:"0px",marginBottom:"4px",transition:"color 0.2s"}}>Password</div>
              <div style={{display: "flex", alignItems: "center", paddingRight: "50px"}}>
                <input
                  ref={inputRef}
                  type={show ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter password"
                  style={{fontFamily: "'JekoMedium', sans-serif", width: "100%",border: "none",outline: "none",fontSize: 16,fontWeight: 700,color: C.dark,background: "transparent",letterSpacing: show ? 0 : 0,caretColor: C.green,padding: 0,margin: 0}}
                />
              </div>
              <button onClick={()=>setShow(!show)} style={{position:"absolute",right:14,top:0,bottom:0,margin:"auto",height:"100%",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Ic n={show?"eyeOff":"eye"} s={20} c={C.med}/>
              </button>
            </div>
          </div>
          
          {showRequired && (
            <div style={{width:"100%",color:"#d08893",fontSize:12,fontWeight:700,marginBottom:10,paddingLeft:4}}>Password is required</div>
          )}
          
          <div style={{color:C.green,fontSize:14,fontWeight:800,cursor:"pointer", marginBottom: 24}}>Forgot your password?</div>
        </div>

        {/* The Spacer: Giant gap when closed, totally disappears when open so the list connects seamlessly */}
        <div style={{ flex: isKeyboardOpen ? 0 : 1 }} />

        {/* Bottom Links: They sit at the bottom naturally, allowing them to slide up behind the overlay */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width: "100%" }}>
          <button style={{padding:"12px 24px",borderRadius:30,border:"none",background:"#f2f2f2",color:C.dark,fontSize:14.5,fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8, marginBottom: 24}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <path d="M9 14l2 2 4-4"></path>
            </svg>
            Log in with screen lock
          </button>
          
          <div style={{fontSize:14,color:C.med, marginBottom: isKeyboardOpen ? 0 : 24}}>Not you? <span style={{color:C.green,fontWeight:800,cursor:"pointer"}}>Switch account</span></div>
        </div>

      </div>

      {/* ─── STICKY FOOTER OVERLAY ─── */}
      {/* If open, this snaps to the bottom of the viewport directly above the keyboard.
          Because it has a solid white background, the content in the scrollable area above slides cleanly behind it. */}
      <div style={{
        ...(isKeyboardOpen ? {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: C.white,
          padding: "16px 24px",
          zIndex: 100
        } : {
          width: "100%",
          padding: "0 24px 24px 24px"
        })
      }}>
        {LoginBtn}
      </div>

    </div>
  );
};

// ── PBB SCREEN ─────────────────────────────────────────────────────────────────
const PBBScreen = ({balance,onBack,onVote,daysLeft,chancesLeft,maxChances,fastMode}) => {
  const [sel,setSel]=useState(null);
  const [cnt,setCnt]=useState(10);
  const [voting,setVoting]=useState(false); 
  const [voted,setVoted]=useState(false);
  const [vInfo,setVInfo]=useState(null);
  const hm=[{name:"Princess",bg:"#c62828"},{name:"Robi",bg:"#1565c0"},{name:"Yen",bg:"#b71c1c"}];
  const cost=cnt;
  const noChances = chancesLeft <= 0;

  const doVote=()=>{
    if(!sel||balance<cost||noChances||voting) return;
    setVoting(true);
    setTimeout(()=>{
      setVoting(false);
      setVInfo({name:sel,cnt});
      setVoted(true);
      onVote(sel,cnt,cost);
    }, fastMode ? 0 : 3000);
  };

  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",background:C.white,position:"relative"}}>
      <div style={{display:"flex",alignItems:"center",padding:"12px 20px"}}>
        <button onClick={onBack} style={{background:"none",border:"none",cursor:"pointer",padding:4}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.2098 12.0377L3.25403 18.9935L5.0218 20.7613L11.9775 13.8055L18.9993 20.8273L20.7671 19.0595L13.7453 12.0377L20.7672 5.01581L18.9995 3.24805L11.9775 10.27L5.02167 3.3141L3.25391 5.08187L10.2098 12.0377Z" fill="black"/></svg>
        </button>
        <span style={{fontSize:16,fontWeight:900,flex:1,textAlign:"center"}}>PBB</span>
        <div style={{display:"flex",alignItems:"center",gap:2}}>
          <button style={{background:"none",border:"none",cursor:"pointer",padding:4}}>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0.738769 14.6521L5.87283 8.54766L0.740211 2.33208L2.66792 0.740244L8.46384 7.75907C8.84807 8.22437 8.84503 8.89774 8.45662 9.35956L2.65205 16.2612L0.738769 14.6521Z" fill="#A9A9A9"/></svg>
          </button>
        </div>
      </div>
      <div style={{background:"#080808",backgroundImage:"radial-gradient(ellipse at 30% 60%,#0d2b1a,#000)",padding:"18px 20px 22px"}}>
        <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:14,flexWrap:"wrap"}}>
          <div style={{background:"white",borderRadius:6,padding:"2px 8px",fontSize:8,fontWeight:900,color:"#cc0000"}}>GMA ✕ ABS-CBN</div>
          <div style={{fontSize:14,fontWeight:800,color:"white"}}>Who will you <span style={{color:C.mint}}>#SAVEwith<em>maya</em>?</span></div>
        </div>
        <div style={{display:"flex",gap:10}}>
          {[
            {v:`${daysLeft} ${daysLeft===1?"day":"days"}`,s:"before voting ends"},
            {v:`${chancesLeft}/${maxChances}`,s:"chances left to vote",s2:"resets every midnight"}
          ].map((b,i)=>(
            <div key={i} style={{flex:1,background:"rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 14px"}}>
              <div style={{fontSize:24,fontWeight:900,color:"white"}}>{b.v}</div>
              <div style={{fontSize:11,color:"#888"}}>{b.s}</div>
              {b.s2&&<div style={{fontSize:10,color:"#666"}}>{b.s2}</div>}
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"flex",borderBottom:`1px solid ${C.gray}`}}>
        {["Save","Evict"].map((t,i)=>(
          <div key={t} style={{padding:"12px 22px",fontWeight:i===0?900:600,fontSize:14,color:i===0?C.dark:C.light,borderBottom:i===0?`3px solid ${C.dark}`:"3px solid transparent",cursor:"pointer"}}>{t}</div>
        ))}
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"16px"}}>
        <div style={{display:"flex",gap:10,marginBottom:18}}>
          {hm.map(h=>(
            <div key={h.name} onClick={()=>setSel(h.name)}
              style={{flex:1,borderRadius:14,overflow:"hidden",cursor:"pointer",border:`3px solid ${sel===h.name?C.green:"transparent"}`,boxShadow:sel===h.name?`0 0 0 2px ${C.mint}55`:"none",transition:"all 0.2s"}}>
              <div style={{background:h.bg,height:72,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:42,height:42,borderRadius:"50%",background:"rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center"}}><Ic n="user" s={22} c="white"/></div>
              </div>
              <div style={{padding:"8px 4px",textAlign:"center",background:"#f8f8f8"}}><div style={{fontSize:12,fontWeight:900}}>{h.name}</div></div>
            </div>
          ))}
        </div>
        {sel&&(
          <div style={{background:C.bg,borderRadius:16,padding:"16px",marginBottom:14}}>
            <div style={{fontWeight:900,marginBottom:10,fontSize:14}}>Votes for {sel}</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {[1,5,10,50,100,500].map(v=>(
                <button key={v} onClick={()=>setCnt(v)}
                  style={{padding:"8px 14px",borderRadius:20,border:`2px solid ${cnt===v?C.green:C.gray}`,background:cnt===v?C.green:C.white,color:cnt===v?"white":C.dark,fontWeight:800,fontSize:12,cursor:"pointer",transition:"all 0.15s"}}>
                  {v}x · ₱{v}
                </button>
              ))}
            </div>
            <div style={{marginTop:12,fontSize:13,color:C.med}}>
              Cost: <strong style={{color:C.dark}}>₱{fmt(cost)}</strong> &nbsp;|&nbsp; After: <strong style={{color:balance>=cost?C.green:"#e74c3c"}}>₱{fmt(Math.max(0,balance-cost))}</strong>
            </div>
          </div>
        )}
      </div>
      <div style={{padding:"10px 16px 16px"}}>
        {noChances&&<div style={{textAlign:"center",color:"#e74c3c",fontSize:13,fontWeight:800,marginBottom:8}}>No chances left to vote today</div>}
        {!noChances&&sel&&balance<cost&&<div style={{textAlign:"center",color:"#e74c3c",fontSize:13,fontWeight:800,marginBottom:8}}>Insufficient balance</div>}
        <button onClick={doVote}
          disabled={!sel||balance<cost||noChances||voting}
          style={{width:"100%",padding:"16px",borderRadius:16,background:sel&&balance>=cost&&!noChances?C.green:"#c8f0de",border:"none",fontSize:16,fontWeight:900,color:C.white,cursor:sel&&balance>=cost&&!noChances&&!voting?"pointer":"default",transition:"background 0.2s",opacity:voting?0.7:1}}>
          {voting?"Processing...":"Save "+(sel||"...")}
        </button>
      </div>
      {voting&&(
        <div style={{position:"absolute",inset:0,background:"rgba(255,255,255,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50}}>
          <div style={{width:36,height:36,border:"4px solid #e0f5ea",borderTop:`4px solid ${C.green}`,borderRadius:"50%",animation:"spin 0.7s linear infinite"}}/>
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      )}
      {voted&&vInfo&&(
        <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"flex-end",zIndex:100}}>
          <div style={{background:C.white,borderRadius:"24px 24px 0 0",padding:"36px 24px 28px",width:"100%",textAlign:"center"}}>
            <div style={{width:68,height:68,borderRadius:"50%",background:C.green,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:"0 4px 24px rgba(0,180,100,0.4)"}}>
              <Ic n="check" s={32} c="white"/>
            </div>
            <div style={{fontSize:26,fontWeight:900,marginBottom:20}}>Voting successful!</div>
            <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderTop:`1px solid ${C.gray}`,borderBottom:`1px solid ${C.gray}`}}>
              <span style={{color:C.med,fontSize:15}}>{vInfo.cnt} vote{vInfo.cnt>1?"s":""} to save {vInfo.name}</span>
              <span style={{fontWeight:900,fontSize:15}}>₱{fmt(vInfo.cnt)}</span>
            </div>
            <button onClick={()=>setVoted(false)} style={{width:"100%",padding:"15px",borderRadius:30,background:C.green,border:"none",fontSize:16,fontWeight:800,color:C.white,cursor:"pointer",marginTop:20}}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

// ── HOME SCREEN ────────────────────────────────────────────────────────────────
const HomeScreen = ({balance,todayTxns,onPBB,onSeeAll,onSettings}) => {
  const [showBal,setShowBal]=useState(true);
  const [tab,setTab]=useState("Wallet");
  
  const [, setTick] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 30000);
    return () => clearInterval(iv);
  }, []);

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
  
  const combinedTxns = [...[...todayTxns].reverse(), ...FEB21].slice(0, 3);

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
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 18px"}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"#e0f5ea",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Ic n="user" s={18} c={C.green}/>
          </div>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            {/* The Settings Button is back! */}
            <button onClick={onSettings} style={{background:"none",border:"none",cursor:"pointer",padding:0}}><Ic n="settings" s={20} c={C.dark}/></button>
            <Ic n="chat" s={22}/>
            <div style={{position:"relative"}}>
              <Ic n="bell" s={22}/>
              <div style={{position:"absolute",top:-6,right:-8,background:C.green,borderRadius:10,padding:"2px 4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:900,color:"white",border:"2px solid white"}}>90</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",gap:2,paddingLeft:6,overflowX:"auto"}}>
          {tabs.map(t=>(
            <div key={t} onClick={()=>setTab(t)} style={{padding:"9px 16px",borderRadius:"20px",fontWeight:tab===t?900:600,fontSize:14,background:tab===t?"#000":"transparent",color:tab===t?"white":C.med,cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"}}>{t}</div>
          ))}
        </div>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"12px 12px 100px"}}>
        <div style={{background:C.white,borderRadius:20,padding:"20px",marginBottom:12}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{fontSize:30,fontWeight:500,letterSpacing:-1}}>{showBal?`₱${fmt(balance)}`:"₱ ••••••••"}</div>
              <div style={{fontSize:13,color:C.med,marginTop:2}}>Wallet balance <span style={{color:C.green,fontWeight:800}}>Auto cash in</span></div>
            </div>
            <button onClick={()=>setShowBal(!showBal)} style={{background:"none",border:"none",cursor:"pointer",marginTop:4}}><Ic n={showBal?"eye":"eyeOff"} s={20} c="#aaa"/></button>
          </div>
          <div style={{display:"flex",gap:10,marginTop:16}}>
            {[{n:"cashin",l:"Cash in"},{n:"send",l:"Send"}].map(b=>(
              <button key={b.l} style={{flex:1,padding:"12px",borderRadius:12,background:"#e6f9f0",border:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontWeight:800,fontSize:13,color:C.green,cursor:"pointer"}}>
                <Ic n={b.n} s={16} c={C.green}/>{b.l}
              </button>
            ))}
          </div>
          <div style={{marginTop:12,background:"#f0faf5",borderRadius:12,padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontWeight:900,fontSize:13}}>Easy Credit</div>
              <div style={{fontSize:11,color:C.med}}>Borrow up to ₱30K</div>
            </div>
            <button style={{background:C.green,border:"none",borderRadius:20,padding:"9px 16px",color:"white",fontWeight:900,fontSize:12,cursor:"pointer"}}>Get it now</button>
          </div>
        </div>

        <div style={{background:C.white,borderRadius:20,padding:"14px 8px",marginBottom:12}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            {shortcuts.map((s,i)=>(
              <div key={i} onClick={s.action}
                style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"10px 2px",cursor:s.action?"pointer":"default",position:"relative",borderRadius:12}}>
                {s.badge&&<div style={{position:"absolute",top:4,right:8,background:"#e74c3c",color:"white",fontSize:7,fontWeight:900,padding:"2px 5px",borderRadius:4,letterSpacing:0.5}}>VOTE</div>}
                <div style={{width:48,height:48,borderRadius:14,background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:5}}>
                  {s.icon==="pbb"?<PBBIcon size={28}/>:<Ic n={s.icon} s={22} c="#333"/>}
                </div>
                <div style={{fontSize:10.5,fontWeight:800,color:C.dark,textAlign:"center",lineHeight:1.3,whiteSpace:"pre-line"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"#000",borderRadius:20,marginBottom:12,padding:"20px 20px 0",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column"}}>
          <div style={{color:C.green,fontSize:22,fontWeight:900,lineHeight:1.1,maxWidth:"75%",marginBottom:16,zIndex:2}}>
            Refer friends<br/>and get P100 per<br/>successful referral
          </div>
          <div style={{position:"absolute",right:-20,top:0,opacity:0.6,fontSize:80}}>💸</div>
          <div style={{background:C.white,margin:"0 -20px",padding:"12px 20px",display:"flex",alignItems:"center",gap:8,cursor:"pointer"}}>
            <span style={{fontSize:16}}>🤩</span>
            <span style={{fontWeight:900,fontSize:13}}>Refer now</span>
          </div>
        </div>

        <div style={{background:C.white,borderRadius:20,padding:"20px",marginBottom:12}}>
          <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:16}}>
            <div style={{fontSize:16,fontWeight:900}}>MAYA XP</div>
            <div style={{fontSize:13,color:C.med,fontWeight:600}}>Beta</div>
          </div>
          
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px 0",marginBottom:20}}>
            {[
              {l:"Unlock\nmore", c:C.green, bg:"#e6f9f0", icon:"LVL\nUP", locked:false},
              {l:"Singlife\nInsurance", c:C.light, bg:C.bg, icon:"🛡️", locked:false},
              {l:"InstaPay\nCashback", c:C.light, bg:C.bg, icon:"💸", locked:true},
              {l:"Bills\nCashback", c:C.light, bg:C.bg, icon:"🧾", locked:true},
              {l:"Crypto\nCashback", c:C.light, bg:C.bg, icon:"🚀", locked:true},
              {l:"Insurance\nCashback", c:C.light, bg:C.bg, icon:"🛡️", locked:true},
            ].map((xp, i) => (
              <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>
                <div style={{width:54,height:60,position:"relative",marginBottom:8}}>
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" fill={xp.bg} stroke={xp.c} strokeWidth="4"/>
                  </svg>
                  <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:14,fontWeight:900,color:xp.c,lineHeight:1.1,whiteSpace:"pre-line"}}>
                    {xp.icon}
                  </div>
                  {xp.locked && (
                    <div style={{position:"absolute",bottom:0,left:0,background:"#000",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid white"}}>
                      <span style={{fontSize:10}}>🔒</span>
                    </div>
                  )}
                </div>
                <div style={{fontSize:11,fontWeight:800,textAlign:"center",lineHeight:1.3,whiteSpace:"pre-line",color:C.dark}}>{xp.l}</div>
              </div>
            ))}
          </div>
          
          <div style={{textAlign:"center",paddingTop:8,borderTop:`1px solid ${C.gray}`}}>
            <span style={{color:C.green,fontWeight:800,fontSize:14,cursor:"pointer"}}>See all benefits ›</span>
          </div>
        </div>

        <div style={{background:C.white,borderRadius:20,padding:"20px",marginBottom:24}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{fontSize:20,fontWeight:900}}>Transactions</div>
            <div onClick={onSeeAll} style={{color:C.green,fontWeight:800,fontSize:14,cursor:"pointer"}}>See all</div>
          </div>

          {combinedTxns.map((tx)=>(
            <div key={tx.id} style={{padding:"10px 0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontSize:12,color:C.light,marginBottom:2,fontWeight:600}}>{tx.sub||(tx.positive?"Received money from":"Purchased on")}</div>
                <div style={{fontSize:14,fontWeight:800}}>{tx.label}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:12,color:C.light,marginBottom:2,fontWeight:600}}>{getDisplayDate(tx)}</div>
                <div style={{fontSize:14,fontWeight:900,color:tx.positive?C.green:C.dark}}>{tx.positive?"":"-"} ₱{fmt(tx.amount)}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{padding:"0 4px",marginBottom:32}}>
          <div style={{fontSize:18,fontWeight:900,marginBottom:14}}>Get rewards</div>
          <div style={{display:"flex",gap:12}}>
            <div style={{flex:1,background:"#00b464",borderRadius:16,padding:"16px",position:"relative",overflow:"hidden",minHeight:100}}>
              <div style={{position:"relative",zIndex:2}}>
                <div style={{color:"white",fontSize:16,fontWeight:900,marginBottom:4}}>Missions</div>
                <div style={{color:"rgba(255,255,255,0.9)",fontSize:11,lineHeight:1.4,fontWeight:600,maxWidth:"70%"}}>Earn rewards for completing tasks</div>
              </div>
              <div style={{position:"absolute",right:-10,bottom:-10,fontSize:50}}>🎯</div>
            </div>
            <div style={{flex:1,background:"#4929aa",borderRadius:16,padding:"16px",position:"relative",overflow:"hidden",minHeight:100}}>
              <div style={{position:"relative",zIndex:2}}>
                <div style={{color:"white",fontSize:16,fontWeight:900,marginBottom:4}}>Vouchers</div>
                <div style={{color:"rgba(255,255,255,0.9)",fontSize:11,lineHeight:1.4,fontWeight:600,maxWidth:"80%"}}>Go claim them before they're gone</div>
              </div>
              <div style={{position:"absolute",right:-5,bottom:-5,fontSize:45}}>🎟️</div>
            </div>
          </div>
        </div>

        <div style={{textAlign:"center",padding:"0 10px"}}>
          <div style={{color:C.green,fontSize:26,fontWeight:900,letterSpacing:-1,marginBottom:12}}>maya</div>
          <div style={{fontSize:11,color:C.med,lineHeight:1.6,fontWeight:600}}>
            Maya Philippines, Inc. is regulated by the Bangko<br/>Sentral ng Pilipinas - <span style={{color:C.green}}>bsp.gov.ph</span>.<br/>
            Visit our Help Center or call us at <span style={{color:C.green}}>+632 8845 7788</span><br/>for any concerns.
          </div>
        </div>
      </div>

      <div style={{position:"absolute",bottom:24,left:0,width:"100%",display:"flex",justifyContent:"center",zIndex:100,padding:"0 20px"}}>
        <div style={{background:"#000",borderRadius:24,padding:"12px 36px",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",maxWidth:280,boxShadow:"0 10px 30px rgba(0,0,0,0.3)"}}>
          <div style={{background:C.green,borderRadius:8,width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:900,fontSize:16}}>m</div>
          <Ic n="scan" s={22} c="white"/>
          <Ic n="grid" s={22} c="white"/>
        </div>
      </div>
    </div>
  );
};

// ── ROOT ───────────────────────────────────────────────────────────────────────
export default function MayaApp() {
  const [screen,setScreen]=useState("login");
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    // Exactly 7 seconds (7000 ms) delay at the start
    const timer = setTimeout(() => setIsAppLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  const [nextScreen,setNextScreen]=useState(null);
  const [transitioning,setTransitioning]=useState(false);
  const [balance,setBalance]=useState(3190.75);
  const [todayTxns,setTodayTxns]=useState([]);
  const [showSettings,setShowSettings]=useState(false);
  const [daysLeft,setDaysLeft]=useState(1);
  const [chancesLeft,setChancesLeft]=useState(29);
  const [maxChances,setMaxChances]=useState(30);
  const [fastMode,setFastMode]=useState(false);

  const navigate=(dest)=>{
    if(transitioning) return;
    setNextScreen(dest);
    setTransitioning(true);
    const delay = fastMode ? 0 : 500 + Math.random()*1000;
    setTimeout(()=>{
      setScreen(dest);
      setTransitioning(false);
      setNextScreen(null);
    }, delay);
  };

  const handleVote=(name,cnt,cost)=>{
    const now=new Date();
    const h=now.getHours(), m=String(now.getMinutes()).padStart(2,"0");
    const ampm=h>=12?"PM":"AM"; const h12=((h%12)||12);
    const tx={id:"v"+Date.now(),label:`PBB Save ${name} x${cnt}`,time:`${String(h12).padStart(2,"0")}:${m} ${ampm}`,timestamp:Date.now(),amount:cost,positive:false,sub:"Purchased on"};
    setTodayTxns(p=>[...p,tx]);
    setBalance(p=>Math.max(0,p-cost));
    setChancesLeft(p=>Math.max(0,p-1));
  };

  const handleAddTxn=(tx)=>{
    setTodayTxns(p=>[...p,{...tx,timestamp:Date.now()}]);
    if(tx.positive) setBalance(p=>p+tx.amount);
    else setBalance(p=>Math.max(0,p-tx.amount));
  };

  // --- STEP 4: The Gatekeeper ---
  if (isAppLoading) return <SplashScreen />;
  if (isLoggingIn) return <SplashScreen message="‎ ‎ ‎ " />;

  // Clean, edge-to-edge mobile container without borders
  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", background: "#000" }}>
      <GlobalStyle/>

      <div style={{ width: "100%", maxWidth: 480, height: "100vh", background: C.white, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
        
        <div style={{flex:1, overflow:"hidden", position:"relative"}}>
          
          {screen === "login" && <LoginScreen onLogin={() => { setIsLoggingIn(true); setTimeout(() => { setIsLoggingIn(false); navigate("home"); }, 5000); }} fastMode={fastMode} />}
          {screen === "home" && <HomeScreen balance={balance} todayTxns={todayTxns} onPBB={() => navigate("pbb")} onSeeAll={() => navigate("transactions")} onSettings={() => setShowSettings(true)} />}
          {screen === "pbb" && <PBBScreen balance={balance} onBack={() => navigate("home")} onVote={handleVote} daysLeft={daysLeft} chancesLeft={chancesLeft} maxChances={maxChances} fastMode={fastMode} />}
          {screen === "transactions" && <TransactionsScreen onBack={() => navigate("home")} todayTxns={todayTxns} />}
          
          {/* Settings Modal (iPhone toggle successfully removed) */}
          {showSettings && <SettingsModal balance={balance} onClose={() => setShowSettings(false)} onSaveBalance={b => setBalance(b)} onAddTxn={handleAddTxn} onClearToday={() => setTodayTxns([])} daysLeft={daysLeft} chancesLeft={chancesLeft} maxChances={maxChances} onSavePBB={({days,chances,max}) => {setDaysLeft(days); setChancesLeft(chances); setMaxChances(max);}} fastMode={fastMode} onSetFastMode={setFastMode} />}
          
          {/* Transition loading overlay */}
          {transitioning && (
            <div style={{position:"absolute",inset:0,background:"rgba(255,255,255,0.55)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div style={{width:36,height:36,border:"4px solid #e0f5ea",borderTop:`4px solid ${C.green}`,borderRadius:"50%",animation:"spin 0.7s linear infinite"}}/>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}