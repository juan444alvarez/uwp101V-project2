'use strict';

/* =====================================================================
   Business Chemistry — WHERE TO PASTE YOUR DATA
   ---------------------------------------------------------------------
   All content lives in the MEMBERS array below. Nothing else in this
   file needs editing.

   HOW IT WORKS
   Each member has an `advice` object with FOUR blocks — one for each
   style the viewer might have picked on the home screen. Example:
   Max is an integrator. When someone who picked "Driver" opens Max's
   profile, they see Max's advice.driver block. Someone who picked
   "Guardian" sees Max's advice.guardian block. Annie is also an
   integrator, but she has her own four blocks — so a Driver viewing
   Annie sees advice written for working with ANNIE specifically, not
   generic integrator advice.

   FOR EACH OF THE 9 MEMBERS, PASTE:
   1. name  — their display name
   2. arch  — their own style (colors the avatar + profile header)
   3. mix   — the four percentages shown on the profile meter
   4. bio   — the 3 sections on the left profile card
   5. advice.driver / .guardian / .pioneer / .integrator — each holds:
        engage (3 tips)  → "How to engage ___" card
        lose   (3 tips)  → "How to lose ___" card
        build.drop (2) + build.adopt (1) → bottom "Build skills" card
   Every t: is a bold tip title, every d: is the sentence under it.
   You can add or remove items in any list — the cards just grow or
   shrink. If a name or sentence contains an apostrophe, use \' 
   (e.g. 'Max\'s plan').
   ===================================================================== */

/* ============ Archetypes (labels + traits shown in the UI) ============ */

const ARCHES = {
  driver:     { label: 'Driver',     traits: 'quantitative, logical' },
  guardian:   { label: 'Guardian',   traits: 'methodical, reserved' },
  pioneer:    { label: 'Pioneer',    traits: 'imaginative, spontaneous' },
  integrator: { label: 'Integrator', traits: 'empathic, diplomatic' },
};

/* ============ YOUR 9 TEAM MEMBERS — PASTE DATA BELOW ============ */

const MEMBERS = [

  /* ───── MEMBER 1 ───── */
  {
    id: 'sylvia',              /* unique id — lowercase, no spaces */
    name: 'Sylvia C.',         /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) — PASTE Sylvia's real percentages */
    bio: [ /* left profile card — written about THIS person — PASTE Sylvia's bio */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Run purposeful meetings', d: 'Sylvia values meetings with real purpose. Show up with a plan and clear goals to make the time meaningful and help both of you stay motivated.' },
          { t: 'Be open to alternatives.', d: 'Integrators value teamwork and are comfortable changing direction. Keep your process open and be prepared to consider different options along the way.' },
          { t: 'Ask questions and listen actively', d: 'Take time to ask for the Integrator\u2019s perspective and listen to their ideas. This builds trust and helps you uncover creative solutions together.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t sacrifice thoroughness for speed', d: 'Avoid rushing decisions without considering their impact. Quick choices may overlook important perspectives and lead to concern about future issues.' },
          { t: 'Don\u2019t pitch on logic alone', d: 'Make your proposals more relatable by explaining how they affect real people and considering impacts beyond just numbers or results.' },
          { t: 'Don\u2019t skip the warm-up', d: 'Don\u2019t jump straight into the details when starting a meeting. Start with a a short, genuine opening greeting to connect with your Integrator teammate.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Sylvia's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean into shared reflective styles', d: 'You both value thoughtfulness. Your Guardian instinct for the domino effects of changes complements her connective thinking.' },
          { t: 'Rally around the team', d: 'Because you both care intensely about quality and teamwork your shared instinct to build team connection can be a point of joy between you.' },
          { t: 'Run with autonomy', d: 'Sylvia can be be \u201Chands-off\u201D with highly independent workers. Capitalize on this to process things independently whenever you need to delve deeper.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t dismiss the value of iteration', d: 'Both of you value thoughtful consideration over quick decisions. Rely on this iterative process, understanding that things may not be perfect on the first try.' },
          { t: 'Don\u2019t rush to identify problems', d: 'While Guardians naturally identify risks, premature critiques stifle Sylvia\u2019s collaborative energy. Work on holding logical critiques until the end of ideation.' },
          { t: 'Don\u2019t always default to the details', d: 'Avoid reigning in the conversation back too quickly just because the lens widens. Cross-topic links are often where the useful synthesis lives.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Sylvia's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Leverage their creativity', d: 'Sylvia has a creative edge with: content, strategy, and copy. Work together there and you\u2019ll find a real collaborative rhythm.' },
          { t: 'Provide storytelling with context', d: 'One way to captivate an Integrator and give them context is to tell a compelling story. Focus on making a concept grounded and relatable rather than theoretical.' },
          { t: 'Build Personal Connections', d: 'Take time to connect on a human level before diving into tasks. Your outgoing Pioneer energy pairs perfectly with her desire to support her peers.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t race past the planning', d: 'While Pioneers thrive on continuous ideation, Sylvia needs moments to build structure. Pause to organize concepts and map out execution.' },
          { t: 'Don\u2019t dismiss structure or process', d: 'Acknowledge the standard, then make the case for the exception. She\u2019ll often be your biggest ally in breaking the rule once she sees you respect it.' },
          { t: 'Don\u2019t jump in without scaffolding', d: 'Outline collaboration framework and timelines for projects up front so you have the freedom to innovate while she enjoys the predictability.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Sylvia's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Spark creative synergy', d: 'As Integrators, both of you see connections everywhere Pair on forward thinking ideas together to find a symbiotic collaboration space.' },
          { t: 'Balance big picture and details', d: 'Agree on main topics and dive into them after going high-level. Don\u2019t get so caught up in the big picture that you ignore the important details that live within them' },
          { t: 'Choose your Integrator approach', d: 'Identify your Integrator subtype: Teamer or Dreamer. Teamers should foster collaboration and open dialogue; Dreamers should emphasize empathy and consensus.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t weigh endless options', d: 'You connect easily, but temper your shared desire to over-explore all alternatives if you want to move things forward quickly.' },
          { t: 'Don\u2019t pursue consensus at all costs', d: 'You both value every voice in a room, however this can dilute decisions. Sylvia values innovation and can agree to disagree when consensus would dull the outcome.' },
          { t: 'Don\u2019t tiptoe around each other', d: 'Empathy crowds momentum when neither Integrator wants to be the one to push. Permit each other to practice direct feedback and unvarnished takes.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Sylvia's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 2 ───── */
  {
    id: 'jordyn',              /* unique id — lowercase, no spaces */
    name: 'Jordyn P.',         /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) — PASTE Jordyn's real percentages */
    bio: [ /* left profile card — written about THIS person — PASTE Jordyn's bio */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Give direct, mindful feedback', d: 'Jordyn welcomes critique (\u201CI don\u2019t care if you tell me that my work is ugly\u201D) when it\u2019s respectful. Harsh delivery tends to make her disengage.' },
          { t: 'Forge Unified Solutions', d: 'Both of you value informed decisions. When Drivers allow time for Integrators to gather input and build consensus, it leads to more robust solutions.' },
          { t: 'Ask questions and listen actively', d: 'If you dismiss an Integrator\u2019s view and they seem uncomfortable, invite them to explain. Listen and restate their perspective to confirm you understand.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t go rogue or leave roles fuzzy', d: 'Jordyn finds that teammates \u201Cgoing rogue\u201D or leaving roles, approvers, and timeframes unclear is challenging. Keeping her informed goes a long way!' },
          { t: 'Don\u2019t skip the warm-up', d: 'Don\u2019t be so focused on a goal that you forget to connect personally. A short, genuine opening is enough. She\u2019ll match your pace for the rest of the time after.' },
          { t: 'Don\u2019t pitch on logic alone', d: 'You both thrive on facts and data. Be patient with Integrator\u2019s need to dig into the details. They can consider the larger implications of a decision this way.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Jordyn's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean into shared reflective styles', d: 'Jordyn has strong Guardian traits with Integrator strengths. Since you both value processes and details, work together there to find a real collaborative rhythm.' },
          { t: 'Pace deliberately', d: 'Both of you value thoughtful consideration over quick decisions. Rely on this iterative process, understanding that things may not be perfect on the first try.' },
          { t: 'Collaborate on process design', d: 'Work together to create processes that are both structured and inclusive. Invite Integrators to help design feedback loops or consensus-building steps.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t frame structure as constraint', d: 'Prevent a core Integrator disconnect by framing necessary processes as tools that support the team\u2019s overall peace of mind, rather than just strict rules.' },
          { t: 'Don\u2019t rush to identify problems', d: 'While Guardians naturally identify risks, premature critiques stifle Integrators collaborative energy. Work on holding logical critiques until the end of ideation.' },
          { t: 'Don\u2019t always default to the details', d: 'Don\u2019t pull the conversation back too quickly when the lens widens. Cross-topic links are often where the useful synthesis lives.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Jordyn's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Leverage their creativity', d: 'Jordyn embraces openness and innovation. You\u2019re encouraged to reflect this spirit. Explore abstract concepts and co-create new ideas together.' },
          { t: 'Provide storytelling with context', d: 'Integrators connect through narrative and emotion. Framing concepts as relatable stories about real people often lands better than abstract theory.' },
          { t: 'Collaborate your way', d: 'Use collaborative tools or methods that suit you both: shared docs, notes, etc. Jordyn is flexible and open to whatever helps you connect and create effectively.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t change agreements on the fly', d: 'Avoid making commitments and then altering them unexpectedly, as this creates confusion. Let them know in advance if something might change.' },
          { t: 'Don\u2019t dump ideas all together', d: 'Refrain from overwhelming Integrators with a barrage of new concepts without pausing for reflection or feedback. Aim to build structure and organize concepts.' },
          { t: 'Don\u2019t start without a plan', d: 'Outline collaboration framework and timelines for projects up front so you have the freedom to innovate while she enjoys the predictability.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Jordyn's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Share responsibility, not redundancy', d: 'Divide research and preparation to avoid duplicating effort. Trust your fellow Integrator\u2019s work. Distribute energy evenly and cover more ground together.' },
          { t: 'Build shared rituals and visible plans', d: 'Use frequent, organized check-ins to creates a sense of rhythm and belonging. Open dialogue and alignment keeps plans transparent and actionable.' },
          { t: 'Channel your secondary types', d: 'Like-type pairs benefit from leaning into their secondary styles. By adding different perspectives, your work becomes even more complete.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t hesitate to be direct', d: 'Empathy crowds momentum when neither Integrator wants to be the one to push. Permit each other to practice direct feedback and unvarnished takes.' },
          { t: 'Don\u2019t endlessly weigh options', d: 'You connect easily, but temper your shared desire to over-explore all alternatives if you want to move things forward quickly.' },
          { t: 'Don\u2019t overcomplicate consensus', d: 'Avoid the trap of or seeking unanimous agreement on every single detail. This can slow progress down and stifle team decisiveness.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Jordyn's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 3 ───── */
  {
    id: 'desiree',             /* unique id — lowercase, no spaces */
    name: 'Desiree C.',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) — PASTE Desiree's real percentages */
    bio: [ /* left profile card — in her own words; titles written to match each quote */
      { h: 'Starts with the person', b: 'I like getting to know people personally because we\u2019re all human beings behind the work. Finding common ground in things like art or design helps us build rapport over time.' },
      { h: 'Takes the time to find answers', b: 'I\u2019m easygoing and will help guide you where you need to go. I might not have the answer right away, but I take time to think things through and investigate what might be impacted. I\u2019ll always do my best to find the answers for you.' },
      { h: 'A Pioneer outside of work', b: 'I see a big difference between my work and personal life. Personally, I lean more toward being a Pioneer. I like trying new things and just going for it, so I appreciate collaborating with people who have different styles,' },
      { h: 'Learns how you work', b: 'In my experience, collaboration is the best when we can tap into each other\u2019s expertise to understand communication styles and strengths. I like to ask for perspectives and learn how others approach coordination and teamwork.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Provide candid input', d: 'Give candid, respectful feedback. When you feel it\u2019s important to question her ideas, do so directly; she appreciates this as a mark of partnership.' },
          { t: 'Define and deliver', d: 'Establish goals and expectations early, then take action in the way that works best for you. Desiree values your autonomy and trusts your ability to deliver.' },
          { t: 'Build momentum together', d: 'Both of you thrive in active roles: sparking progress, organizing, and sustaining momentum together. Lean into this to create shared purpose and excitement.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t challenge without understanding', d: 'If you want to challenge a pattern, seek to understand why it exists before probing for exceptions. Desiree welcomes new perspectives, but the approach matters.' },
          { t: 'Don\u2019t overlook protocols', d: 'Bypassing established procedures usually means you will just have to circle back and do it again later, which drains both of your time and energy.' },
          { t: 'Don\u2019t be too inflexible', d: 'Remember that collaboration benefits from adaptability. If you\u2019re too set in your methods, you may miss opportunities for creative solutions.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Desiree's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean into shared reflective styles', d: 'Desiree has strong Guardian traits with Integrator strengths. Since you both value processes and details, work together there to find a real collaborative rhythm.' },
          { t: 'Pace deliberately', d: 'Leverage your mutual appreciation for details by collaborating to address questions. Encourage open dialogue to thoroughly explore issues.' },
          { t: 'Keep Progress Clear', d: 'Keep your teammate engaged and on track by sharing clear updates, structured steps, and practical checkpoints throughout your collaborative process.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t always default to the details', d: 'Avoid reigning in the conversation back too quickly just because the lens widens. Cross-topic links are often where useful synthesis lives.' },
          { t: 'Don\u2019t let caution kill creativity', d: 'You instinctively spot risks, but leading with overt caution can shut down new possibilities. Acknowledge pitfalls, but stay open to fresh solutions.' },
          { t: 'Don\u2019t frame structure as constraint', d: 'Prevent a core Integrator disconnect by framing necessary processes as tools that support the team\u2019s overall peace of mind, rather than just strict rules.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Desiree's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Embrace collaborative creativity', d: 'Share your ideas early so you can build and refine them together. Your idea-generation energy is something she values, not something she\u2019s bracing against.' },
          { t: 'Build personal connections', d: 'Take time to connect on a human level before diving into tasks. Your outgoing Pioneer energy pairs perfectly with her desire to support her peers.' },
          { t: 'Encourage feedback loops', d: 'Desiree enjoys feedback and being a resource, so regularly check in, ask for her thoughts, and invite her in on your ideation sessions.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t skip practical details', d: 'Presenting concepts without background can confuse others. Ground them in research and practical steps to help your integrator teammate connect with your vision.' },
          { t: 'Don\u2019t miss the advantage of structure', d: 'Structure can feel like a hurdle, but it helps ideas grow. Plan your ideas with Desiree\u2014use that as a springboard for your creativity so your ideas gain momentum.' },
          { t: 'Don\u2019t ignore the need for consensus', d: 'Taking time to build consensus in your conversation helps turn creative ideas into clear next steps that both of you can support and follow through on.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Desiree's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Align your roles', d: 'Split tasks realistically, agree on who tackles what, and sync to share progress. She enjoys building momentum and driving great results with fellow Integrators.' },
          { t: 'Co-create holistic solutions', d: 'Keep dialogue open about the ripple effects of decisions and use your big-picture mindsets to anticipate challenges and outcomes.' },
          { t: 'Choose your Integrator approach', d: 'Identify your Integrator subtype: Teamer or Dreamer. Teamers should foster collaboration and open dialogue; Dreamers should emphasize empathy and consensus.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t let care become avoidance', d: 'Withholding a concern can be considerate in the moment, but it often leavesa the person without hte information they need to truly show up.' },
          { t: 'Don\u2019t endlessly weigh options', d: 'You connect easily, but temper your shared desire to over-explore all alternatives if you want to move things forward quickly.' },
          { t: 'Don\u2019t hesitate to be direct', d: 'Empathy crowds momentum when neither Integrator wants to be the one to push. Permit each other to practice direct feedback and unvarnished takes.' },
        ],
        build: { /* bottom "Build skills" card — PASTE Desiree's content */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 4 ───── */
  {
    id: 'member4',            /* unique id — lowercase, no spaces */
    name: 'PASTE Name',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) */
    bio: [ /* left profile card — written about THIS person */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what a Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 5 ───── */
  {
    id: 'member5',            /* unique id — lowercase, no spaces */
    name: 'PASTE Name',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) */
    bio: [ /* left profile card — written about THIS person */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what a Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 6 ───── */
  {
    id: 'member6',            /* unique id — lowercase, no spaces */
    name: 'PASTE Name',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) */
    bio: [ /* left profile card — written about THIS person */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what a Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 7 ───── */
  {
    id: 'member7',            /* unique id — lowercase, no spaces */
    name: 'PASTE Name',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) */
    bio: [ /* left profile card — written about THIS person */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what a Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 8 ───── */
  {
    id: 'member8',            /* unique id — lowercase, no spaces */
    name: 'PASTE Name',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) */
    bio: [ /* left profile card — written about THIS person */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what a Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 9 ───── */
  {
    id: 'member9',            /* unique id — lowercase, no spaces */
    name: 'PASTE Name',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 40, guardian: 40, pioneer: 40, integrator: 60 }, /* style-mix meter (0–100 each) */
    bio: [ /* left profile card — written about THIS person */
      { h: 'At their best', b: 'PASTE bio paragraph.' },
      { h: 'Under pressure', b: 'PASTE bio paragraph.' },
      { h: 'What earns their trust', b: 'PASTE bio paragraph.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what a Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
          { t: 'PASTE tip title', d: 'PASTE tip detail.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
            { t: 'PASTE habit title', d: 'PASTE habit detail.' },
          ],
          adopt: { t: 'PASTE habit title', d: 'PASTE habit detail.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },
];

/* =====================================================================
   App code — no edits needed below this line
   ===================================================================== */

/* ============ State ============ */

const STORE_KEY = 'bc-state';
const state = { you: null, screen: 'select', memberId: null };
try { Object.assign(state, JSON.parse(localStorage.getItem(STORE_KEY)) || {}); } catch (e) { /* fresh start */ }
if (!ARCHES[state.you]) { state.you = null; state.screen = 'select'; }
if (state.screen === 'profile' && !MEMBERS.some((m) => m.id === state.memberId)) state.screen = 'team';
if (!['select', 'team', 'profile'].includes(state.screen)) state.screen = 'select';

const $ = (sel) => document.querySelector(sel);
const first = (m) => m.name.split(' ')[0];
const initials = (m) => m.name.split(' ').map((p) => p[0]).join('').replace('.', '');
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

/* ============ Navigation (View Transitions API) ============ */

let morphTagged = [];
let morphBackTo = null; // member id whose roster avatar should morph on return
function tagMorph(el) { if (el) { el.style.viewTransitionName = 'avatar'; morphTagged.push(el); } }
function clearMorphs() { morphTagged.forEach((el) => { el.style.viewTransitionName = ''; }); morphTagged = []; }

function go(patch) {
  const apply = () => { Object.assign(state, patch); render(); persist(); };
  if (document.startViewTransition && !reducedMotion.matches && !document.hidden) {
    document.startViewTransition(apply).finished.catch(() => {}).finally(clearMorphs);
  } else {
    apply();
    clearMorphs();
  }
}
function persist() {
  localStorage.setItem(STORE_KEY, JSON.stringify({ you: state.you, screen: state.screen, memberId: state.memberId }));
}

/* ============ Renderers ============ */

const SCREENS = { select: '#screen-select', team: '#screen-team', profile: '#screen-profile' };

function render() {
  Object.entries(SCREENS).forEach(([k, sel]) => { $(sel).hidden = k !== state.screen; });
  renderHeader();
  if (state.screen === 'team') renderTeam();
  if (state.screen === 'profile') renderProfile();
  $('#viewport').scrollTop = 0;
}

function renderHeader() {
  const showPill = Boolean(state.you) && state.screen !== 'select';
  $('#youWrap').hidden = !showPill;
  if (showPill) {
    const chip = $('#youChip');
    chip.dataset.arch = state.you;
    chip.textContent = ARCHES[state.you].label;
  }
  closeMenu();
}

function renderMenu() {
  $('#styleMenu').innerHTML = Object.entries(ARCHES).map(([key, a]) => `
    <button class="style-option" role="menuitemradio" aria-checked="${key === state.you}" data-arch="${key}">
      <span class="avatar avatar-sm" data-arch="${key}">${a.label[0]}</span>
      <span><span class="opt-name">${a.label}</span><span class="opt-sub">${cap(a.traits)}</span></span>
      <span class="opt-check">${key === state.you ? checkSvg('currentColor') : ''}</span>
    </button>`).join('');
}

function renderTeam() {
  $('#teamGrid').innerHTML = MEMBERS.map((m) => `
    <button class="member-row" data-id="${m.id}" aria-label="${m.name}, ${ARCHES[m.arch].label} — view profile">
      <span class="avatar" data-arch="${m.arch}">${initials(m)}</span>
      <span><span class="member-name">${m.name}</span>
      <span class="member-sub">${ARCHES[m.arch].label} \u00B7 ${ARCHES[m.arch].traits}</span></span>
      <span class="row-arrow" aria-hidden="true">\u2192</span>
    </button>`).join('');
  if (morphBackTo) {
    tagMorph($(`#teamGrid .member-row[data-id="${morphBackTo}"] .avatar`));
    morphBackTo = null;
  }
}

function tipItem(tip, orbClass, svg) {
  return `<li><span class="orb ${orbClass}" aria-hidden="true">${svg}</span><div><div class="tip-title">${tip.t}</div><p class="tip-body">${tip.d}</p></div></li>`;
}

function renderProfile() {
  const m = MEMBERS.find((x) => x.id === state.memberId);
  if (!m || !state.you) { state.screen = m ? 'select' : 'team'; render(); return; }
  const you = ARCHES[state.you];
  const them = ARCHES[m.arch];
  const pair = m.advice[state.you]; // this member's block for the viewer's style
  const same = state.you === m.arch;
  const buildTitle = same ? `Working with a fellow ${them.label}` : `Build ${them.label} skills as a ${you.label}`;
  const mixRows = Object.entries(m.mix).sort((a, b) => b[1] - a[1]);

  $('#profileGrid').innerHTML = `
    <article class="card bio-card">
      <header class="bio-head">
        <span class="avatar avatar-lg" data-arch="${m.arch}" style="view-transition-name: avatar">${initials(m)}</span>
        <div>
          <h2 class="bio-name">${first(m)}<span class="sep"> \u00B7 </span>${them.label}</h2>
          <p class="bio-traits">${them.traits}</p>
        </div>
      </header>
      <div class="meter" role="img" aria-label="Style mix for ${m.name}">
        ${mixRows.map(([k, pct]) => `
          <div class="meter-row">
            <span class="meter-label">${ARCHES[k].label}</span>
            <span class="dots" data-arch="${k}">${dotRow(pct)}</span>
            <span class="meter-pct">${pct}%</span>
          </div>`).join('')}
      </div>
      <div class="bio-sections">
        ${m.bio.map((s) => `<div class="bio-block"><h3>${s.h}</h3><p>${s.b}</p></div>`).join('')}
      </div>
    </article>

    <article class="card list-card">
      <h3 class="card-title">How to engage ${first(m)}</h3>
      <ul class="tip-list">
        ${pair.engage.map((tip) => tipItem(tip, 'orb-check', checkSvg('#fff'))).join('')}
      </ul>
    </article>

    <article class="card list-card">
      <h3 class="card-title">How to lose ${first(m)}</h3>
      <ul class="tip-list">
        ${pair.lose.map((tip) => tipItem(tip, 'orb-x', xSvg('#fff'))).join('')}
      </ul>
    </article>

    <article class="card build-card" data-you="${state.you}" data-arch="${m.arch}">
      <h3 class="card-title">${buildTitle}</h3>
      <div class="build-grid">
        <ul class="build-col">
          ${pair.build.drop.map((tip) => `<li><span class="dot-bullet red" aria-hidden="true"></span><div><div class="tip-title">${tip.t}</div><p class="tip-body">${tip.d}</p></div></li>`).join('')}
        </ul>
        ${curveSvg()}
        <ul class="build-col">
          <li><span class="dot-bullet green" aria-hidden="true"></span><div><div class="tip-title">${pair.build.adopt.t}</div><p class="tip-body">${pair.build.adopt.d}</p></div></li>
        </ul>
      </div>
    </article>`;
}

/* ============ SVG snippets ============ */

function dotRow(pct) {
  const on = Math.round(pct / 10);
  return Array.from({ length: 10 }, (_, i) => `<span${i < on ? ' class="on"' : ''}></span>`).join('');
}
function checkSvg(color) {
  return `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M3.5 8.5 6.6 11.6 12.5 4.9" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}
function xSvg(color) {
  return `<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4.5 4.5 11.5 11.5 M11.5 4.5 4.5 11.5" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"></path></svg>`;
}
function curveSvg() {
  return `<svg class="build-curve" viewBox="0 0 220 120" fill="none" aria-hidden="true">
    <defs><linearGradient id="curveGrad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
      <stop class="curve-you" offset="0" stop-opacity="0.85"></stop>
      <stop class="curve-them" offset="1" stop-opacity="0.95"></stop>
    </linearGradient></defs>
    <path d="M8 28 C 82 28, 122 60, 212 60" stroke="url(#curveGrad)" stroke-width="1.5"></path>
    <path d="M8 92 C 82 92, 122 60, 212 60" stroke="url(#curveGrad)" stroke-width="1.5"></path>
  </svg>`;
}

/* ============ Events ============ */

$('#brandBtn').addEventListener('click', () => {
  if (state.screen !== 'select') go({ screen: 'select', memberId: null });
});

$('#styleCards').addEventListener('click', (e) => {
  const card = e.target.closest('.style-card');
  if (card) go({ you: card.dataset.arch, screen: 'team', memberId: null });
});

$('#teamGrid').addEventListener('click', (e) => {
  const row = e.target.closest('.member-row');
  if (!row) return;
  tagMorph(row.querySelector('.avatar'));
  go({ screen: 'profile', memberId: row.dataset.id });
});

$('#backBtn').addEventListener('click', () => {
  morphBackTo = state.memberId;
  go({ screen: 'team', memberId: null });
});

/* Style switcher dropdown */
const pill = $('#youPill');
const menu = $('#styleMenu');
function closeMenu() { menu.hidden = true; pill.setAttribute('aria-expanded', 'false'); }
pill.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menu.hidden) { renderMenu(); menu.hidden = false; pill.setAttribute('aria-expanded', 'true'); }
  else closeMenu();
});
menu.addEventListener('click', (e) => {
  const opt = e.target.closest('.style-option');
  if (!opt) return;
  if (opt.dataset.arch === state.you) { closeMenu(); return; }
  go({ you: opt.dataset.arch });
});
document.addEventListener('click', (e) => { if (!menu.hidden && !e.target.closest('.you-wrap')) closeMenu(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

render();
