/* ============================================================
   SHOWCASE MOCKS — 24 mock UI components for Bento and Showcase
   Scaled with container queries (cqw, em) and filling 100% frame
   ============================================================ */

import {
  MockWindow,
  Avatar,
  Chip,
  Bar,
  MockButton,
  ScoreRing,
  Waveform,
  KanbanColumn,
  KanbanCard,
} from "./primitives";
import styles from "./mocks.module.css";

/* 01 — HeroFramed: mini dashboard with action strip */
export function HeroFramed() {
  return (
    <MockWindow title="Pareeksha Workspace" tabs={["Overview", "Candidates", "Reports"]}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6em", height: "100%", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.6em" }}>
          <div>
            <div style={{ fontSize: "1.25em", fontWeight: 600, color: "var(--heading)" }}>Engineering Hiring Drive</div>
            <div style={{ fontSize: "1em", color: "var(--subtle)" }}>4 Active Rounds · 142 Candidates</div>
          </div>
          <div style={{ display: "flex", gap: "0.4em" }}>
            <MockButton label="Create Test" variant="accent" />
            <MockButton label="Share Link" variant="secondary" />
          </div>
        </div>

        <div className={styles.grid3}>
          <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "0.5em", padding: "0.5em" }}>
            <div style={{ fontSize: "0.95em", color: "var(--muted)" }}>Applied</div>
            <div style={{ fontSize: "1.5em", fontWeight: 700, color: "var(--heading)", marginBlock: "0.1em" }}>142</div>
            <Bar width="3-4" />
          </div>
          <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "0.5em", padding: "0.5em" }}>
            <div style={{ fontSize: "0.95em", color: "var(--muted)" }}>Passed Code</div>
            <div style={{ fontSize: "1.5em", fontWeight: 700, color: "var(--ok)", marginBlock: "0.1em" }}>68</div>
            <Bar width="1-2" />
          </div>
          <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "0.5em", padding: "0.5em" }}>
            <div style={{ fontSize: "0.95em", color: "var(--muted)" }}>AI Interviewed</div>
            <div style={{ fontSize: "1.5em", fontWeight: 700, color: "var(--accent-to)", marginBlock: "0.1em" }}>24</div>
            <Bar width="1-4" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4em 0.6em", background: "var(--gray-900)", borderRadius: "0.4em", border: "1px solid var(--gray-800)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
            <Avatar initials="AK" size="sm" color="var(--accent-from)" />
            <span style={{ fontSize: "1.1em", color: "var(--heading)", fontWeight: 500 }}>Aarav K. completed Round 2</span>
          </div>
          <Chip label="Score: 94%" variant="ok" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 02 — PipelineBoard: 4 Kanban columns with live candidate transfer */
export function PipelineBoard() {
  return (
    <MockWindow title="Hiring Pipeline — Senior Frontend Role" tabs={["Kanban", "Table", "Analytics"]}>
      <div className={styles.cols}>
        <KanbanColumn title="Applied" count={4}>
          <KanbanCard name="Aarav K." initials="AK" status="New" statusVariant="accent" color="var(--accent-from)" />
          <KanbanCard name="Priya S." initials="PS" status="Reviewed" statusVariant="neutral" color="var(--accent-to)" />
          <KanbanCard name="Rohan M." initials="RM" status="Shortlisted" statusVariant="ok" color="var(--ok)" />
        </KanbanColumn>

        <KanbanColumn title="Screening" count={3}>
          <KanbanCard name="Neha D." initials="ND" status="Scheduled" statusVariant="warn" color="var(--warn)" />
          <KanbanCard name="Ananya R." initials="AR" status="In Progress" statusVariant="accent" color="var(--accent-from)" />
          <KanbanCard name="Karthik N." initials="KN" status="Verified" statusVariant="ok" color="var(--ok)" />
        </KanbanColumn>

        <KanbanColumn title="Test Round" count={3}>
          <KanbanCard
            name="Vikram J."
            initials="VJ"
            status="Moving..."
            statusVariant="ok"
            color="var(--ok)"
            className={styles.kanban_sliding_card}
          />
          <KanbanCard name="Meera I." initials="MI" status="Passed 92%" statusVariant="ok" color="var(--accent-to)" />
          <KanbanCard name="Amit T." initials="AT" status="Submitted" statusVariant="neutral" color="var(--subtle)" />
        </KanbanColumn>

        <KanbanColumn title="Interview" count={2} badgeClass={styles.kanban_count_tick}>
          <KanbanCard name="Tanvi B." initials="TB" status="Scheduled" statusVariant="warn" color="var(--warn)" />
          <KanbanCard name="Dev P." initials="DP" status="Completed" statusVariant="ok" color="var(--ok)" />
          <KanbanCard name="Rahul S." initials="RS" status="Offer Ready" statusVariant="accent" color="var(--accent-from)" />
        </KanbanColumn>
      </div>
    </MockWindow>
  );
}

/* 03 — AssessmentBuilder: interactive question editor with cycling selection & countdown */
export function AssessmentBuilder() {
  return (
    <MockWindow title="Assessment Builder — Data Structures" tabs={["Questions", "Grading", "Settings"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.5em" }}>
        {/* Top metrics bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "0.4em" }}>
            <Chip label="Question 4 of 12" variant="accent" />
            <Chip label="Hard · 10 Pts" variant="warn" />
          </div>
          <span className={styles.timer_counter} />
        </div>

        {/* Question Title */}
        <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "0.5em", padding: "0.5em 0.7em" }}>
          <div style={{ fontSize: "1.25em", fontWeight: 600, color: "var(--heading)", marginBlockEnd: "0.2em" }}>
            What is the amortized time complexity of dynamic array append?
          </div>
          <div style={{ fontSize: "1em", color: "var(--subtle)" }}>Single Choice · Negative marking: -2.5 pts</div>
        </div>

        {/* 4 Options with cycling radio highlight */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4em" }}>
          <div className={styles.radio_cycle}>
            <span className={`${styles.radio_dot} ${styles.radio_dot_active}`} />
            <span>O(1) amortized</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5em", padding: "0.35em 0.5em", borderRadius: "var(--r-sm)", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", fontSize: "1.15em", color: "var(--muted)" }}>
            <span className={styles.radio_dot} />
            <span>O(n) worst case</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5em", padding: "0.35em 0.5em", borderRadius: "var(--r-sm)", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", fontSize: "1.15em", color: "var(--muted)" }}>
            <span className={styles.radio_dot} />
            <span>O(log n)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5em", padding: "0.35em 0.5em", borderRadius: "var(--r-sm)", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", fontSize: "1.15em", color: "var(--muted)" }}>
            <span className={styles.radio_dot} />
            <span>O(n log n)</span>
          </div>
        </div>

        {/* Bottom progress bar & action */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
          <div className={styles.progress_live}>
            <div className={styles.progress_live_fill} />
          </div>
          <MockButton label="Next Question →" variant="primary" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 04 — CodeRound: 12-line editor with typing animation & test case flip */
export function CodeRound() {
  return (
    <MockWindow title="Coding Round — Two Sum Problem" tabs={["Problem", "Solution.js", "Console"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        {/* Editor with 12 lines */}
        <div className={styles.code_block}>
          <div className={styles.code_row}><span className={styles.code_num}>1</span><span className={styles.code_comment}>{"/** Solve Two Sum with Map */"}</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>2</span><span><span className={styles.code_keyword}>function</span> <span className={styles.code_fn}>twoSum</span>(nums, target) {"{"}</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>3</span><span>  <span className={styles.code_keyword}>const</span> map = <span className={styles.code_keyword}>new</span> Map();</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>4</span><span>  <span className={styles.code_keyword}>for</span> (<span className={styles.code_keyword}>let</span> i = 0; i &lt; nums.length; i++) {"{"}</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>5</span><span>    <span className={styles.code_keyword}>const</span> complement = target - nums[i];</span></div>
          <div className={styles.code_row}>
            <span className={styles.code_num}>6</span>
            <span className={styles.typing_line}>    <span className={styles.code_keyword}>if</span> (map.has(complement)) <span className={styles.code_keyword}>return</span> [map.get(complement), i];<span className={styles.code_caret} /></span>
          </div>
          <div className={styles.code_row}><span className={styles.code_num}>7</span><span>    map.set(nums[i], i);</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>8</span><span>  {"}"}</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>9</span><span>  <span className={styles.code_keyword}>return</span> [];</span></div>
          <div className={styles.code_row}><span className={styles.code_num}>10</span><span>{"}"}</span></div>
        </div>

        {/* Test Case Panel */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.3em 0.5em", background: "var(--gray-900)", borderRadius: "var(--r-sm)", border: "1px solid var(--gray-800)" }}>
          <div style={{ display: "flex", gap: "0.4em", alignItems: "center" }}>
            <span className={styles.test_chip_1}><Chip label="Test 1: [2,7,11,15]" variant="ok" /></span>
            <span className={styles.test_chip_2}><Chip label="Test 2: [3,2,4]" variant="ok" /></span>
            <span className={styles.test_chip_3}><Chip label="Test 3: [3,3]" variant="ok" /></span>
          </div>
          <div className={styles.passed_badge_pop}>
            <Chip label="3/3 Passed ✓" variant="ok" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

/* 05 — AiInterview: live dialogue transcript, animated waveform & score ring */
export function AiInterview() {
  return (
    <MockWindow title="AI Interview Session — System Architecture" tabs={["Live Session", "Transcript", "Score"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.5em" }}>
        {/* Header bar with AI agent & candidate */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBlockEnd: "0.3em", borderBlockEnd: "1px solid var(--gray-800)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
            <span style={{ inlineSize: "0.6em", blockSize: "0.6em", borderRadius: "50%", background: "var(--ok)", boxShadow: "0 0 8px var(--ok)" }} />
            <span style={{ fontSize: "1.15em", fontWeight: 600, color: "var(--heading)" }}>AI Interviewer (Vani)</span>
          </div>
          <Chip label="Rec: 14:22" variant="accent" />
        </div>

        {/* Transcript bubbles */}
        <div className={styles.transcript_list}>
          <div className={`${styles.bubble_ai} ${styles.bubble_anim_1}`}>
            <strong>AI:</strong> Can you describe how you would handle cache invalidation in distributed services?
          </div>
          <div className={`${styles.bubble_user} ${styles.bubble_anim_2}`}>
            <strong>Candidate:</strong> I use event-driven cache invalidation via Redis Pub/Sub with TTL fallbacks.
          </div>
          <div className={`${styles.bubble_ai} ${styles.bubble_anim_3}`}>
            <strong>AI:</strong> Great. How do you prevent thundering herd problems during cache warm-up?
          </div>
          <div className={`${styles.bubble_user} ${styles.bubble_anim_4}`}>
            <strong>Candidate:</strong> Mutex locks on cache misses combined with probabilistic early expiration.
          </div>
        </div>

        {/* Waveform and Live Score */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4em 0.6em", background: "var(--gray-900)", borderRadius: "var(--r-sm)", border: "1px solid var(--gray-800)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
            <span style={{ fontSize: "1em", color: "var(--subtle)" }}>Live Voice</span>
            <Waveform bars={16} animated={true} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
            <span style={{ fontSize: "1.05em", color: "var(--heading)", fontWeight: 500 }}>Technical Depth</span>
            <ScoreRing value={88} size={36} color="var(--ok)" animated={true} />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

/* 06 — Scorecard: candidate skill radar and evaluation metrics */
export function Scorecard() {
  return (
    <MockWindow title="Candidate Scorecard — Rohan M.">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
            <Avatar initials="RM" size="md" color="var(--accent-from)" />
            <div>
              <div style={{ fontSize: "1.25em", fontWeight: 600, color: "var(--heading)" }}>Rohan M.</div>
              <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Full Stack Lead · 8 YOE</div>
            </div>
          </div>
          <ScoreRing value={88} size={42} color="var(--ok)" animated={true} />
        </div>

        {/* 4 Skill breakdown bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35em" }}>
          {[
            { label: "Algorithms & DS", score: "94%", color: "var(--ok)", w: "94%" },
            { label: "System Design", score: "88%", color: "var(--accent-from)", w: "88%" },
            { label: "Architecture", score: "85%", color: "var(--accent-to)", w: "85%" },
            { label: "Communication", score: "90%", color: "var(--ok)", w: "90%" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.15em" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1em" }}>
                <span style={{ color: "var(--body)" }}>{item.label}</span>
                <span style={{ fontWeight: 600, color: item.color }}>{item.score}</span>
              </div>
              <div style={{ inlineSize: "100%", blockSize: "0.4em", background: "var(--gray-800)", borderRadius: "var(--r-pill)", overflow: "hidden" }}>
                <div style={{ inlineSize: item.w, blockSize: "100%", background: item.color, borderRadius: "inherit" }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBlockStart: "0.3em", borderBlockStart: "1px solid var(--gray-800)" }}>
          <Chip label="Verdict: Strong Hire" variant="ok" />
          <MockButton label="View Replay" variant="secondary" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 07 — QuestionBank: searchable repository with tags and difficulty */
export function QuestionBank() {
  return (
    <MockWindow title="Question Bank (2,400+ Verified Items)" tabs={["All", "Coding", "System Design", "Aptitude"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        <div style={{ display: "flex", gap: "0.4em", alignItems: "center" }}>
          <div style={{ flex: 1, padding: "0.35em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-pill)", fontSize: "1.05em", color: "var(--muted)" }}>
            Search questions, tags, concepts...
          </div>
          <MockButton label="Filter" variant="secondary" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.35em", flex: 1, overflow: "hidden" }}>
          {[
            { q: "Implement LRU Cache with O(1) operations", tag: "Data Structures", diff: "Medium", count: "Used 420x" },
            { q: "Design scalable Rate Limiter with Token Bucket", tag: "System Design", diff: "Hard", count: "Used 280x" },
            { q: "Concurrency control in PostgreSQL MVCC", tag: "Databases", diff: "Medium", count: "Used 190x" },
          ].map((item) => (
            <div key={item.q} style={{ padding: "0.4em 0.5em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)" }}>
              <div style={{ fontSize: "1.15em", fontWeight: 500, color: "var(--heading)", marginBlockEnd: "0.2em" }}>{item.q}</div>
              <div style={{ display: "flex", gap: "0.4em", alignItems: "center" }}>
                <Chip label={item.diff} variant={item.diff === "Hard" ? "warn" : "ok"} />
                <span style={{ fontSize: "0.95em", color: "var(--subtle)" }}>{item.tag}</span>
                <span style={{ fontSize: "0.95em", color: "var(--muted)", marginInlineStart: "auto" }}>{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  );
}

/* 08 — ProctorWall: live candidate monitoring feeds with alert indicators */
export function ProctorWall() {
  return (
    <MockWindow title="Proctoring Monitor — Live Stream (4 Feeds)">
      <div className={styles.grid2}>
        {[
          { name: "Aarav K.", status: "Verified 100%", variant: "ok" as const, color: "var(--ok)" },
          { name: "Priya S.", status: "Tab switch alert", variant: "warn" as const, color: "var(--warn)" },
          { name: "Rohan M.", status: "Face tracking OK", variant: "ok" as const, color: "var(--ok)" },
          { name: "Neha D.", status: "Audio normal", variant: "neutral" as const, color: "var(--accent-from)" },
        ].map((feed) => (
          <div key={feed.name} style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.5em", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "1.1em", fontWeight: 600, color: "var(--heading)" }}>{feed.name}</span>
              <span style={{ inlineSize: "0.5em", blockSize: "0.5em", borderRadius: "50%", background: feed.color }} />
            </div>
            <div style={{ marginBlock: "0.4em", height: "2.5em", background: "rgba(0, 0, 0, 0.4)", borderRadius: "0.3em", display: "flex", alignItems: "center", justifyContent: "center", border: `1px dashed ${feed.color}` }}>
              <span style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Webcam Feed Active</span>
            </div>
            <Chip label={feed.status} variant={feed.variant} />
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* 09 — BentoOverview: 5 filled metric tiles (no empty space) */
export function BentoOverview() {
  return (
    <MockWindow title="Hiring Performance Summary">
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "0.5em", height: "100%" }}>
        <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.6em", gridRow: "span 2", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "1em", color: "var(--subtle)" }}>Total Pipeline</div>
            <div style={{ fontSize: "1.8em", fontWeight: 700, color: "var(--heading)", marginBlock: "0.1em" }}>1,420</div>
            <div style={{ fontSize: "0.95em", color: "var(--ok)" }}>↑ 28% this month</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
            <Bar width="full" />
            <Bar width="3-4" />
            <Bar width="1-2" />
          </div>
        </div>

        <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.5em", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Pass Rate</div>
          <div style={{ fontSize: "1.4em", fontWeight: 700, color: "var(--ok)" }}>76.4%</div>
          <Chip label="High benchmark" variant="ok" />
        </div>

        <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.5em", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Avg Time</div>
          <div style={{ fontSize: "1.4em", fontWeight: 700, color: "var(--accent-to)" }}>8.2 days</div>
          <Chip label="-3.4d reduction" variant="accent" />
        </div>

        <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.5em", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>AI Conducted</div>
          <div style={{ fontSize: "1.4em", fontWeight: 700, color: "var(--heading)" }}>342 rounds</div>
          <Chip label="100% automated" variant="ok" />
        </div>

        <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.5em", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Offer Ratio</div>
          <div style={{ fontSize: "1.4em", fontWeight: 700, color: "var(--warn)" }}>94.2%</div>
          <Chip label="Accepted" variant="warn" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 10 — FunnelAnalytics: full bars with animated scaleX growth & counter percentages */
export function FunnelAnalytics() {
  return (
    <MockWindow title="Hiring Conversion Funnel" tabs={["All Candidates", "By Role"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        {[
          { stage: "1. Applied", count: "1,420 candidates", pctClass: styles.funnel_pct_1, w: "100%", color: "var(--accent-from)" },
          { stage: "2. Screened", count: "680 candidates", pctClass: styles.funnel_pct_2, w: "48%", color: "var(--accent-to)" },
          { stage: "3. Assessed", count: "310 candidates", pctClass: styles.funnel_pct_3, w: "22%", color: "var(--warn)" },
          { stage: "4. Hired", count: "42 offers accepted", pctClass: styles.funnel_pct_4, w: "8%", color: "var(--ok)" },
        ].map((item) => (
          <div key={item.stage} className={styles.funnel_row}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1em" }}>
              <span style={{ fontWeight: 600, color: "var(--heading)" }}>{item.stage}</span>
              <span style={{ color: "var(--muted)" }}>{item.count}</span>
              <span className={item.pctClass} style={{ fontWeight: 700, color: item.color }} />
            </div>
            <div className={styles.funnel_bar_track}>
              <div
                className={styles.funnel_bar_fill}
                style={{ inlineSize: item.w, backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* 11 — Scheduler: interactive interview booking calendar */
export function Scheduler() {
  return (
    <MockWindow title="Interview Scheduler — Automated Slots" tabs={["Weekly", "Daily"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.5em" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "1.15em", fontWeight: 600, color: "var(--heading)" }}>October 2026</span>
          <div className={styles.sched_btn_pulse}>
            <MockButton label="Auto-Schedule" variant="accent" />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.35em", flex: 1 }}>
          {["Mon 19", "Tue 20", "Wed 21", "Thu 22", "Fri 23"].map((day, dIdx) => (
            <div key={day} style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.35em", display: "flex", flexDirection: "column", gap: "0.3em" }}>
              <div style={{ fontSize: "1em", fontWeight: 600, color: "var(--subtle)", textAlign: "center" }}>{day}</div>
              <div style={{ padding: "0.25em", background: dIdx === 1 ? "var(--accent-from)" : "var(--card)", borderRadius: "0.25em", fontSize: "0.95em", textAlign: "center", color: dIdx === 1 ? "var(--white)" : "var(--muted)" }}>
                10:00 AM
              </div>
              <div className={dIdx === 2 ? styles.slot_bounce : undefined} style={{ padding: "0.25em", background: dIdx === 2 ? "var(--ok)" : "var(--card)", borderRadius: "0.25em", fontSize: "0.95em", textAlign: "center", color: dIdx === 2 ? "var(--white)" : "var(--muted)" }}>
                02:30 PM
              </div>
              <div style={{ padding: "0.25em", background: "var(--card)", borderRadius: "0.25em", fontSize: "0.95em", textAlign: "center", color: "var(--subtle)" }}>
                04:00 PM
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1em", color: "var(--muted)" }}>
          <span>Synced with Google Calendar & Slack</span>
          <Chip label="4 Slots Open" variant="ok" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 12 — Notifications: live multi-channel toast feed */
export function Notifications() {
  return (
    <MockWindow title="Notification Dispatch Center" tabs={["All Logs", "WhatsApp", "Email"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.45em" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "1.15em", color: "var(--muted)" }}>Real-time Delivery Status</span>
          <Chip label="Automated" variant="ok" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4em", flex: 1 }}>
          <div className={styles.toast_item_1} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
              <svg viewBox="0 0 16 16" width={14} height={14} fill="none" stroke="var(--ok)" strokeWidth={2}>
                <path d="M2 8l4 4 8-8" className={styles.tick_draw} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "1.1em", color: "var(--heading)" }}>Aarav K. submitted Code Round</span>
            </div>
            <Chip label="Score: 100%" variant="ok" />
          </div>

          <div className={styles.toast_item_2} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
              <svg viewBox="0 0 16 16" width={14} height={14} fill="none" stroke="var(--ok)" strokeWidth={2}>
                <path d="M2 8l4 4 8-8" className={styles.tick_draw} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "1.1em", color: "var(--heading)" }}>WhatsApp invite sent to Priya</span>
            </div>
            <Chip label="Read 10:14" variant="accent" />
          </div>

          <div className={styles.toast_item_3} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
              <svg viewBox="0 0 16 16" width={14} height={14} fill="none" stroke="var(--ok)" strokeWidth={2}>
                <path d="M2 8l4 4 8-8" className={styles.tick_draw} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "1.1em", color: "var(--heading)" }}>Offer Letter Accepted by Rohan</span>
            </div>
            <Chip label="Accepted ✓" variant="ok" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

/* 13 — ResumeParse: automated resume skill extraction */
export function ResumeParse() {
  return (
    <MockWindow title="Resume AI Parser — Match Report">
      <div className={styles.cols}>
        <div className={styles.col} style={{ borderInlineEnd: "1px solid var(--gray-800)", paddingInlineEnd: "0.5em" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4em", marginBlockEnd: "0.4em" }}>
            <Avatar initials="AR" size="md" color="var(--accent-from)" />
            <div>
              <div style={{ fontSize: "1.15em", fontWeight: 600, color: "var(--heading)" }}>Ananya R.</div>
              <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Senior Backend Dev</div>
            </div>
          </div>
          <div style={{ fontSize: "1em", color: "var(--muted)", marginBlockEnd: "0.3em" }}>Parsed Skills:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3em" }}>
            <Chip label="Go" variant="accent" />
            <Chip label="PostgreSQL" variant="ok" />
            <Chip label="Kafka" variant="neutral" />
            <Chip label="Docker" variant="neutral" />
          </div>
        </div>
        <div className={styles.col} style={{ paddingInlineStart: "0.5em", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "1.1em", fontWeight: 600, color: "var(--heading)" }}>Job Fit Score</div>
            <div style={{ fontSize: "1.8em", fontWeight: 700, color: "var(--ok)", marginBlock: "0.1em" }}>94%</div>
            <Bar width="full" />
          </div>
          <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Meets 8 of 8 required criteria</div>
          <MockButton label="Approve to Test" variant="primary" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 14 — CtaCard: candidate recruitment call to action */
export function CtaCard() {
  return (
    <MockWindow title="Campaign Launcher">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", textAlign: "center", alignItems: "center" }}>
        <Chip label="Batch Drive 2026" variant="accent" />
        <div style={{ fontSize: "1.4em", fontWeight: 700, color: "var(--heading)" }}>
          Hire Your Tech Team in 48 Hours
        </div>
        <div style={{ fontSize: "1.05em", color: "var(--muted)", maxInlineSize: "80%" }}>
          Assess 1,000+ candidates simultaneously with proctored AI tests.
        </div>
        <div style={{ display: "flex", gap: "0.5em" }}>
          <MockButton label="Launch Drive" variant="primary" />
          <MockButton label="View Templates" variant="secondary" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 15 — PricingMinimal: transparent pricing tiers */
export function PricingMinimal() {
  return (
    <MockWindow title="Plan Options">
      <div className={styles.grid3}>
        {[
          { name: "Starter", price: "$0", note: "Forever free", btn: "Active", var: "secondary" as const },
          { name: "Growth", price: "$79", note: "Per month", btn: "Upgrade", var: "accent" as const },
          { name: "Custom", price: "Custom", note: "Tailored limits", btn: "Contact", var: "secondary" as const },
        ].map((tier) => (
          <div key={tier.name} style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.5em", display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center" }}>
            <div style={{ fontSize: "1.1em", fontWeight: 600, color: "var(--heading)" }}>{tier.name}</div>
            <div style={{ fontSize: "1.5em", fontWeight: 700, color: "var(--heading)" }}>{tier.price}</div>
            <div style={{ fontSize: "0.9em", color: "var(--subtle)" }}>{tier.note}</div>
            <MockButton label={tier.btn} variant={tier.var} />
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* 16 — VerticalGridFeatures: 4 core capabilities */
export function VerticalGridFeatures() {
  return (
    <MockWindow title="Feature Matrix">
      <div className={styles.grid2}>
        {[
          { title: "Anti-Cheat Suite", desc: "Face, audio & tab tracking" },
          { title: "Code Sandboxing", desc: "Isolated Docker execution" },
          { title: "AI Speech Scoring", desc: "Fluency & technical depth" },
          { title: "CRM Sync", desc: "Webhook & API pipelines" },
        ].map((f) => (
          <div key={f.title} style={{ padding: "0.45em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)" }}>
            <div style={{ fontSize: "1.15em", fontWeight: 600, color: "var(--heading)" }}>{f.title}</div>
            <div style={{ fontSize: "0.95em", color: "var(--muted)", marginBlockStart: "0.2em" }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* 17 — SkeletonRows: clean loading skeleton */
export function SkeletonRows() {
  return (
    <MockWindow title="Loading Test Submissions...">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6em", padding: "0.3em 0" }}>
            <div style={{ inlineSize: "1.8em", blockSize: "1.8em", borderRadius: "50%", background: "var(--gray-800)" }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.3em" }}>
              <div className={styles.shimmer} style={{ inlineSize: `${60 + i * 8}%`, blockSize: "0.6em", borderRadius: "var(--r-pill)" }} />
              <div className={styles.shimmer} style={{ inlineSize: `${40 + i * 5}%`, blockSize: "0.45em", borderRadius: "var(--r-pill)" }} />
            </div>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/* 18 — EmptyStates: centered illustration & prompt */
export function EmptyStates() {
  return (
    <MockWindow title="Assessment Library">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center", border: "1px dashed var(--gray-700)", borderRadius: "var(--r-sm)", padding: "0.8em", textAlign: "center", gap: "0.4em" }}>
        <svg viewBox="0 0 24 24" width={32} height={32} fill="none" stroke="var(--subtle)" strokeWidth={1.5}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: "1.25em", fontWeight: 600, color: "var(--heading)" }}>No Assessments Created Yet</div>
        <div style={{ fontSize: "1em", color: "var(--muted)", maxInlineSize: "85%" }}>
          Get started in seconds by picking a ready-made template or importing questions.
        </div>
        <MockButton label="+ New Assessment" variant="primary" />
      </div>
    </MockWindow>
  );
}

/* 19 — ContactGradient: support & query composer */
export function ContactGradient() {
  return (
    <MockWindow title="Contact Support & Sales">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        <div style={{ fontSize: "1.15em", color: "var(--heading)", fontWeight: 500 }}>
          Questions about enterprise testing limits?
        </div>
        <div style={{ padding: "0.4em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", fontSize: "1.05em", color: "var(--muted)" }}>
          team@pareeksha.io
        </div>
        <div style={{ padding: "0.5em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", fontSize: "1.05em", color: "var(--subtle)", flex: 1 }}>
          Tell us about your team size, expected candidate volume, and required integrations...
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MockButton label="Send Message →" variant="accent" />
        </div>
      </div>
    </MockWindow>
  );
}

/* 20 — LoginForm: candidate secure portal */
export function LoginForm() {
  return (
    <MockWindow title="Candidate Assessment Portal">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "0.4em", gap: "0.4em" }}>
        <div>
          <div style={{ fontSize: "1.25em", fontWeight: 600, color: "var(--heading)" }}>Enter Test Room</div>
          <div style={{ fontSize: "1em", color: "var(--subtle)" }}>Access code provided in your email invite</div>
        </div>
        <div style={{ padding: "0.4em 0.6em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", fontSize: "1.1em", color: "var(--heading)", fontFamily: "var(--font-mono)" }}>
          PRK-8921-FRONTEND
        </div>
        <div style={{ display: "flex", gap: "0.4em", alignItems: "center" }}>
          <Chip label="Proctoring Active" variant="ok" />
          <Chip label="Camera Ready" variant="accent" />
        </div>
        <MockButton label="Begin Test (45 Min)" variant="primary" />
      </div>
    </MockWindow>
  );
}

/* 21 — GradientHero: branded evaluation hero banner */
export function GradientHero() {
  return (
    <MockWindow title="Candidate Experience">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", background: "radial-gradient(circle at top right, rgba(99, 102, 241, 0.2), transparent 70%)", borderRadius: "var(--r-sm)", padding: "0.6em" }}>
        <Chip label="Pareeksha Verified" variant="ok" />
        <div style={{ fontSize: "1.4em", fontWeight: 700, color: "var(--heading)" }}>
          Fair, Fast, and Stress-Free Evaluation
        </div>
        <div style={{ fontSize: "1.05em", color: "var(--muted)" }}>
          No tricky setup. One link opens your proctored assessment in browser.
        </div>
        <Bar width="1-2" />
      </div>
    </MockWindow>
  );
}

/* 22 — TabbedHero: multi-round scorecard overview */
export function TabbedHero() {
  return (
    <MockWindow title="Evaluation Overview" tabs={["Scorecard", "AI Transcript", "Code Replay"]}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "1.2em", fontWeight: 600, color: "var(--heading)" }}>Comprehensive Review</span>
          <Chip label="Passed All 3 Rounds" variant="ok" />
        </div>
        <div className={styles.grid3}>
          <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.4em", textAlign: "center" }}>
            <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>MCQ Aptitude</div>
            <div style={{ fontSize: "1.3em", fontWeight: 700, color: "var(--heading)" }}>96%</div>
          </div>
          <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.4em", textAlign: "center" }}>
            <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>Coding Round</div>
            <div style={{ fontSize: "1.3em", fontWeight: 700, color: "var(--ok)" }}>100%</div>
          </div>
          <div style={{ background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)", padding: "0.4em", textAlign: "center" }}>
            <div style={{ fontSize: "0.95em", color: "var(--subtle)" }}>AI Interview</div>
            <div style={{ fontSize: "1.3em", fontWeight: 700, color: "var(--accent-to)" }}>88%</div>
          </div>
        </div>
        <MockButton label="Export PDF Report" variant="secondary" />
      </div>
    </MockWindow>
  );
}

/* 23 — DeskIllustration: testing setup environment */
export function DeskIllustration() {
  return (
    <MockWindow title="Proctored Room Checklist">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
          <span style={{ inlineSize: "0.6em", blockSize: "0.6em", borderRadius: "50%", background: "var(--ok)" }} />
          <span style={{ fontSize: "1.15em", fontWeight: 600, color: "var(--heading)" }}>Environment Checklist</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
          {[
            "1. Webcam and microphone permissions granted",
            "2. Fullscreen mode locked without tabs",
            "3. Secondary display disconnected",
            "4. Audio analysis calibrated",
          ].map((item) => (
            <div key={item} style={{ fontSize: "1.05em", color: "var(--body)", display: "flex", alignItems: "center", gap: "0.4em" }}>
              <span style={{ color: "var(--ok)", fontWeight: 700 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Chip label="Ready to Launch Assessment" variant="ok" />
      </div>
    </MockWindow>
  );
}

/* 24 — ScrollReveal: stage checklist progress */
export function ScrollReveal() {
  return (
    <MockWindow title="Hiring Workflow Progress">
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "0.4em" }}>
        {[
          { title: "Stage 1: Application Filter", status: "Complete (142 parsed)", variant: "ok" as const },
          { title: "Stage 2: Online Coding Test", status: "Complete (68 submitted)", variant: "ok" as const },
          { title: "Stage 3: AI Speech Interview", status: "In Progress (24 scheduled)", variant: "warn" as const },
          { title: "Stage 4: Offer Generation", status: "Upcoming", variant: "neutral" as const },
        ].map((s) => (
          <div key={s.title} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.35em 0.5em", background: "var(--gray-900)", border: "1px solid var(--gray-800)", borderRadius: "var(--r-sm)" }}>
            <span style={{ fontSize: "1.1em", fontWeight: 500, color: "var(--heading)" }}>{s.title}</span>
            <Chip label={s.status} variant={s.variant} />
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

/** Export all mocks as an ordered array */
export const SHOWCASE_MOCKS = [
  HeroFramed,
  PipelineBoard,
  AssessmentBuilder,
  CodeRound,
  AiInterview,
  Scorecard,
  QuestionBank,
  ProctorWall,
  BentoOverview,
  FunnelAnalytics,
  Scheduler,
  Notifications,
  ResumeParse,
  CtaCard,
  PricingMinimal,
  VerticalGridFeatures,
  SkeletonRows,
  EmptyStates,
  ContactGradient,
  LoginForm,
  GradientHero,
  TabbedHero,
  DeskIllustration,
  ScrollReveal,
] as const;
