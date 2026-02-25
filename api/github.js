export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { changes } = req.body;
  const token = process.env.VITE_GITHUB_TOKEN;
  const repo = process.env.VITE_GITHUB_REPO;

  // Step 1: Get current file
  const fileRes = await fetch(`https://api.github.com/repos/${repo}/contents/src/App.jsx`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
  });
  const fileData = await fileRes.json();
  const currentContent = atob(fileData.content.replace(/\n/g, ""));
  let newContent = currentContent;

  // Step 2: Apply all changes
  changes.forEach(({ from, to }) => {
    newContent = newContent.replace(from, to);
  });

  // Step 3: Commit
  const commitRes = await fetch(`https://api.github.com/repos/${repo}/contents/src/App.jsx`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "devtools: live style update",
      content: btoa(unescape(encodeURIComponent(newContent))),
      sha: fileData.sha
    })
  });

  const commitData = await commitRes.json();
  if (commitData.commit) {
    res.status(200).json({ ok: true, commit: commitData.commit.sha });
  } else {
    res.status(500).json({ error: commitData.message });
  }
}