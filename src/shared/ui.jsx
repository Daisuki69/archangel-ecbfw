import React from 'react';

export const C = {
  mint:"#2ff29e", green:"#00b464", purple:"#4929aa", wine:"#1f155f",
  white:"#fff", bg:"#f2f2f2", gray:"#e8e8e8", dark:"#111",
  med:"#555", light:"#999",
};

export const DEFAULT_STYLES = {
  headerPadding: "20px 25px",
  shortcutIconSize: 56,
  shortcutIconRadius: 14,
  shortcutIconBg: "#f4f6f5",
  shortcutLabelSize: 10.5,
  txnRowPadding: "10px 20px",
  txnLabelSize: 15,
  txnSubSize: 12,
  txnAmountSize: 15,
  txnSubGap: 3,
  txnTimeGap: 3,
  datePillSize: 10.5,
  datePillPadding: "6px 18px",
  datePillRadius: 30,
  datePillBg: "#111111",
  datePillTopPad: 14,
  datePillBottomPad: 9,
  balanceFontSize: 32,
  pbbPhotoSize: "75%",
  pbbPhotoRadius: 12,
  pbbNameSize: 11,
  pbbTopStripHeight: 0,
  pbbBannerHeight: 140,
  pbbMayaLogoTop: 56.2,
  pbbMayaLogoRight: 9.8,
  pbbMayaLogoWidth: 92,
  pbbBottomStripHeight: 87,
  pbbStatsOverlap: 83,
  pbbNotchPaddingY: 30,
  pbbNotchRadius: 11,
  pbbNotchMarginX: 20,
  pbbNotchStatSize: 18,
  pbbNotchStatWeight: 900,
  pbbNotchLabelSize: 11,
  pbbNotchLabelWeight: 700,
  pbbNotchStatFont: "CerebriBook",
  pbbNotchLabelFont: "CerebriBook",
  bodyFont: "CerebriBook",
  balanceFont: "JekoMedium",
  txnLabelFont: "CerebriBook",
  txnAmountFont: "JekoMedium",
  shortcutLabelFont: "CerebriBook",
  datePillFont: "CerebriBook",
  pbbNameFont: "CerebriBook",
  txnLabelWeight: 800,
  txnAmountWeight: 900,
  txnSubWeight: 600,
  shortcutLabelWeight: 800,
  datePillWeight: 800,
  balanceWeight: 600,
  pbbNameWeight: 800,
  floatingNavBottom: 37,
  floatingNavOuterPadding: "0 20px",
  floatingNavRadius: 15,
  floatingNavInnerPadding: "15.7px 40px",
  floatingNavMaxWidth: 265,
  eyeIconSize: 25,
  eyeIconMarginTop: -22,
  eyeIconMarginRight: 10,
  profileIconMarginTop: 0,
  profileIconMarginLeft: 0,
  tabRowPaddingLeft: 35,
  tabRowGap: -10,
  tabPillPaddingX: 30,
  tabPillPaddingY: 6.8,
  tabPillRadius: 20,
  tabPillBg: "#000000",
  tabPillColor: "#ffffff",
  tabInactiveColor: "#555555",
  tabFontSize: 14,
  tabActiveFontWeight: 900,
  tabInactiveFontWeight: 600,
  tabActiveFontSize: 14,
  tabInactiveFontSize: 14,
  tabFont: "CerebriBook",
  tabFirstActivePaddingLeft: 25,
  tabFirstInactivePaddingLeft: 15,
  splashEnterDuration: 0.4,
  splashExitDuration: 0.6,
  splashCenterDuration: 2200,
};

export const fmt = (n) => Number(n).toLocaleString("en-PH",{minimumFractionDigits:2,maximumFractionDigits:2});

export const Ic = ({n,s=22,c=C.dark}) => {
  const p = {stroke:c,fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"};
  const m = {
    user: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z" fill={c}/><path fillRule="evenodd" clipRule="evenodd" d="M21.2687 18.8411C21.2687 17.272 19.9967 16 18.4276 16H5.53133C3.98493 16 2.73132 17.2536 2.73132 18.8V19.1887C2.73132 20.7351 3.98493 21.9887 5.53132 21.9887H18.4687C20.0151 21.9887 21.2687 20.7351 21.2687 19.1887V18.8411ZM4.73132 19.1887L4.73132 18.8C4.73132 18.3582 5.0895 18 5.53133 18H18.4276C18.8921 18 19.2687 18.3766 19.2687 18.8411V19.1887C19.2687 19.6305 18.9105 19.9887 18.4687 19.9887H5.53132C5.08949 19.9887 4.73132 19.6305 4.73132 19.1887Z" fill={c}/></svg>,
    settings: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    chat: <svg width={s} height={s} viewBox="0 0 24 24" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  };
  return m[n] || <svg width={s} height={s}/>;
};

export const PBBIcon = ({size=24}) => (
  <img src="/pbbicon.svg" width={size} height={size} style={{objectFit:"contain"}} />
);

export const FEB21 = [
  {id:"h1", label:"+639053064476", time:"11:30 PM", amount:2700, positive:true, sub:"Received money from"},
  {id:"h2", label:"PBB Save Princess x500", time:"05:54 PM", amount:500, positive:false, sub:"Purchased on"},
  {id:"h3", label:"PBB Save Princess x500", time:"05:54 PM", amount:500, positive:false, sub:"Purchased on"},
  {id:"h31", label:"Maya Savings", time:"09:27 AM", amount:15000, positive:true, sub:"Received money from"},
];

export const relativeTime = (ts) => {
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

export default {};
