import pkg from "firebase-admin";

if (!pkg.apps.length) {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export default async function handler(req, res) {
  const db = pkg.firestore();
  const ref = db.collection("ecbfw").doc("shared");
  const snap = await ref.get();
  const d = snap.data();
  const newDays = Math.max(0, d.daysLeft - 1);
  await ref.update({ daysLeft: newDays });
  res.status(200).json({ ok: true, newDays });
}