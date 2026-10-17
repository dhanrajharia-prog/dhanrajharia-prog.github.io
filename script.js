/* =====================================================================
   EDIT HERE: this is the ONLY part you need to change.
   Keep the quote marks " " and the commas!
   ===================================================================== */
const ME = {
  pageTitle: "Dhanraj Haria | Portfolio",
  name: "Dhanraj Haria",
  tagline: "3rd year student at MPSTE College",

  facts: [
    { k: "Studying", v: "3rd year, MPSTE College" },
    { k: "Codes in", v: "Python, C++, R" },
    { k: "Plays", v: "Cricket" },
    { k: "Also into", v: "Gaming and driving" }
  ],
  bio: "I'm Dhanraj Haria, a third-year student at MPSTE College. I code in Python, C++ and R.\nOff the screen I like playing cricket, gaming and driving.\nI solve problems under pressure and I'm a team player.",

  projects: [
    { title: "Cricket", tag: "Hobby", text: "I like playing cricket. It's a team game, and it's where solving problems under pressure gets tested in real time.", link: "", linkText: "" },
    { title: "Gaming", tag: "Hobby", text: "I like gaming. It's a good place to practise quick decisions and working with a team.", link: "", linkText: "" },
    { title: "Driving", tag: "Hobby", text: "I like driving. It takes focus and calm, quick decisions.", link: "", linkText: "" }
  ],

  languages: ["Python", "C++", "R"],
  strengths: ["Problem solving under pressure", "Team player"],
  interests: ["Cricket", "Gaming", "Driving"],

  /* Contact: email or social links only. NO phone number or home address.
     The Contact section stays hidden until you add at least one entry here. */
  contact: [],
  footer: "Stumps. Thanks for visiting. Dhanraj Haria, 2026"
};
/* ===================== END OF EDIT AREA ============================= */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
document.title = ME.pageTitle;
$("name").textContent = ME.name;
$("tagline").textContent = ME.tagline;
$("facts").innerHTML = ME.facts.map(f => `<dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd>`).join("");
$("bio").textContent = ME.bio;
$("projects").innerHTML = ME.projects.map(p => `<article class="inn"><header><h3>${esc(p.title)}</h3><span class="tag">${esc(p.tag)}</span></header><p>${esc(p.text)}</p>${p.link ? `<p><a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkText || "Open")}</a></p>` : ""}</article>`).join("");
$("langs").innerHTML = ME.languages.map(i => `<li>${esc(i)}</li>`).join("");
$("strengths").innerHTML = ME.strengths.map(i => `<li>${esc(i)}</li>`).join("");
$("chips").innerHTML = ME.interests.map(i => `<li>${esc(i)}</li>`).join("");
$("links").innerHTML = ME.contact.map(c => `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.label)}<small>${esc(c.detail)}</small></a>`).join("");
if (ME.contact.length) { $("contact").hidden = false; $("navContact").hidden = false; }
$("foot").textContent = ME.footer;

/* Little interactive touch: bowl a ball and watch the scoreboard. */
const outcomes = ["0","0","0","1","1","1","2","3","4","4","6","W"];
let runs = 0, wkts = 0, balls = 0, last = [];
$("bowl").addEventListener("click", () => {
  if (wkts === 10) { runs = 0; wkts = 0; balls = 0; last = []; }
  const o = outcomes[Math.floor(Math.random() * outcomes.length)];
  balls++;
  if (o === "W") wkts++; else runs += +o;
  last = last.concat(o).slice(-6);
  $("score").textContent = `${runs}/${wkts}`;
  $("overs").textContent = wkts === 10 ? "(All out. Tap to restart)" : `(${Math.floor(balls / 6)}.${balls % 6} ov)`;
  $("balls").innerHTML = last.map(b => `<i class="${b === "W" ? "w" : b === "4" ? "b" : b === "6" ? "r" : ""}">${b}</i>`).join("");
});
