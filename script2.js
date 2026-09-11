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

   FOR EACH OF THE 8 MEMBERS:
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

/* ============ YOUR 8 TEAM MEMBERS ============ */

const MEMBERS = [

  /* ───── MEMBER 1 ───── */
  {
    id: 'sylvia',              /* unique id — lowercase, no spaces */
    name: 'Sylvia C.',         /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 34, guardian: 48, pioneer: 58, integrator: 72 }, /* style-mix meter (0–100 each) — DRAFT: replace with Sylvia's real percentages */
    bio: [ /* left profile card — DRAFT, drawn from Sylvia's own advice blocks; replace with her words */
      { h: 'At their best', b: 'Sylvia works across content, strategy, and copy, and she is strongest connecting them \u2014 carrying a thread out of one conversation and into another until the through-line shows up.' },
      { h: 'Under pressure', b: 'She widens rather than narrows. When something is unsettled she wants more angles and more input, which is thorough, but it can hold a decision open longer than the work allows.' },
      { h: 'What earns their trust', b: 'Respect for the standard before the exception. Show her you understand why a process exists and she is often the first to help you break it.' },
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Closing the question early', d: 'You want the call made. She is still linking it to two other workstreams, and that link often changes what the right call is.' },
            { t: 'Arguing from the number alone', d: 'Data settles it for you. She weighs who is affected downstream, so a case with no people in it reads as unfinished.' },
          ],
          adopt: { t: 'Earn her hands-off mode', d: 'Sylvia goes hands-off with people who run independently. Win that once and you get the autonomy you want, with her connective read of the work running underneath it.' }, /* right column — 1 habit to adopt */
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
          { t: 'Don\u2019t always default to the details', d: 'Avoid reining the conversation back in too quickly just because the lens widens. Cross-topic links are often where the useful synthesis lives.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Reeling the topic back in', d: 'When she widens the lens she is usually joining two things. Returning to the detail too fast cuts the synthesis before it lands.' },
            { t: 'Critiquing while it is forming', d: 'You spot the flaw early and say so. Delivered mid-ideation it reads as a verdict, and her collaborative energy goes quiet.' },
          ],
          adopt: { t: 'Build the scaffold she works inside', d: 'She wants structure and would rather not build it herself. Set the framework and the timeline, and your instinct for order becomes the thing that frees her to range.' }, /* right column — 1 habit to adopt */
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Breaking the rule on sight', d: 'She respects the standard before the exception. Acknowledge why it exists and she helps you break it; skip that and she defends it.' },
            { t: 'Ideating with no landing point', d: 'Continuous generation is your rhythm. She needs a pause to organize the concepts and map how they actually get executed.' },
          ],
          adopt: { t: 'Pitch the story, then the plan', d: 'You are both drawn to what could be. Pair your narrative with a timeline and she can carry the idea into content, strategy, and copy without slowing you down.' }, /* right column — 1 habit to adopt */
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Widening past the decision', d: 'Two connective thinkers can always find one more angle. Name the moment you stop opening the question and start answering it.' },
            { t: 'Chasing the agreement you both feel', d: 'She would rather disagree than dull the outcome. Consensus stops being the goal once it costs you the better idea.' },
          ],
          adopt: { t: 'Split the horizon from the week', d: 'Agree who holds the long view and who holds what ships next. Two Integrators trading those roles on purpose covers ground that neither of you naturally guards.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 2 ───── */
  {
    id: 'jordyn',              /* unique id — lowercase, no spaces */
    name: 'Jordyn P.',         /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 35, guardian: 62, pioneer: 44, integrator: 78 }, /* style-mix meter (0–100 each) — DRAFT: replace with Jordyn's real percentages */
    bio: [ /* left profile card — DRAFT, drawn from Jordyn's own quotes; replace with her words */
      { h: 'At their best', b: 'Jordyn keeps a project legible. She names who owns what, who approves it, and when it\u2019s due \u2014 then leaves people room to work inside that frame.' },
      { h: 'Under pressure', b: 'Ambiguity is what wears on her. When roles blur or a teammate goes rogue, she pulls toward structure and wants the group to re-agree on the plan before moving.' },
      { h: 'What earns their trust', b: 'Candor delivered with respect. She doesn\u2019t care if you tell her the work is ugly; what loses her is harsh delivery, not hard feedback.' },
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Deciding before you consult', d: 'Speed is your edge, but a call made alone gets re-litigated later. Ten minutes of input up front saves the hour spent revisiting it.' },
            { t: 'Treating disagreement as debate', d: 'You sharpen an idea by pushing on it. Sustained pushback reads to Jordyn as a verdict on her rather than on the work.' },
          ],
          adopt: { t: 'Make alignment part of the data', d: 'You already optimize for the best decision. Count whose input is missing as a gap in your evidence, and gathering it becomes a Driver move \u2014 not a detour from one.' }, /* right column — 1 habit to adopt */
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
          { t: 'Don\u2019t rush to identify problems', d: 'While Guardians naturally identify risks, premature critiques stifle Integrators\u2019 collaborative energy. Work on holding logical critiques until the end of ideation.' },
          { t: 'Don\u2019t always default to the details', d: 'Don\u2019t pull the conversation back too quickly when the lens widens. Cross-topic links are often where the useful synthesis lives.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Auditing before affirming', d: 'Your first instinct is to find what breaks. Leading with the flaw reads as rejection, even when you meant it as care.' },
            { t: 'Working the problem alone', d: 'You prefer to arrive with the answer finished. Jordyn would rather be in the room while it takes shape.' },
          ],
          adopt: { t: 'Put people into the process', d: 'Build the cadence you want, then name who gets consulted at each checkpoint. You keep the structure and she gets the inclusion \u2014 neither of you leaves your own style.' }, /* right column — 1 habit to adopt */
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Improvising the plan mid-flight', d: 'Changing direction feels generative to you and destabilizing to her. Signal the pivot before you take it.' },
            { t: 'Filling the room with options', d: 'Volume of ideas reads as energy to you. To Jordyn it reads as a decision nobody is helping her make.' },
          ],
          adopt: { t: 'Pitch it as a story about people', d: 'You\u2019re already the strongest storyteller in the room. Aim that talent at who the idea actually serves and you\u2019ve made the Integrator case without dimming your own.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Share responsibility, not redundancy', d: 'Divide research and preparation to avoid duplicating effort. Trust your fellow Integrator\u2019s work. Distribute energy evenly and cover more ground together.' },
          { t: 'Build shared rituals and visible plans', d: 'Use frequent, organized check-ins to create a sense of rhythm and belonging. Open dialogue and alignment keeps plans transparent and actionable.' },
          { t: 'Channel your secondary types', d: 'Like-type pairs benefit from leaning into their secondary styles. By adding different perspectives, your work becomes even more complete.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t hesitate to be direct', d: 'Empathy crowds momentum when neither Integrator wants to be the one to push. Permit each other to practice direct feedback and unvarnished takes.' },
          { t: 'Don\u2019t endlessly weigh options', d: 'You connect easily, but temper your shared desire to over-explore all alternatives if you want to move things forward quickly.' },
          { t: 'Don\u2019t overcomplicate consensus', d: 'Avoid the trap of seeking unanimous agreement on every single detail. This can slow progress down and stifle team decisiveness.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Waiting for the other to push', d: 'When both of you protect the mood, nobody names the problem. Agree that whoever sees it first is the one who says it.' },
            { t: 'Reading consensus into silence', d: 'Quiet isn\u2019t agreement. Ask for the objection out loud so you\u2019re not building on a yes that was never given.' },
          ],
          adopt: { t: 'Borrow your second style', d: 'Jordyn\u2019s is Guardian. Pair her structure with whatever runs second for you \u2014 Driver decisiveness, Pioneer range \u2014 so the two of you stop sharing one blind spot.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 3 ───── */
  {
    id: 'desiree',             /* unique id — lowercase, no spaces */
    name: 'Desiree C.',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 32, guardian: 60, pioneer: 52, integrator: 76 }, /* style-mix meter (0–100 each) — DRAFT: replace with Desiree's real percentages */
    bio: [ /* left profile card — in her own words; titles written to match each quote */
      { h: 'Starts with the person', b: 'I like getting to know people personally because we\u2019re all human beings behind the work. Finding common ground in things like art or design helps us build rapport over time.' },
      { h: 'Takes the time to find answers', b: 'I\u2019m easygoing and will help guide you where you need to go. I might not have the answer right away, but I take time to think things through and investigate what might be impacted. I\u2019ll always do my best to find the answers for you.' },
      { h: 'A Pioneer outside of work', b: 'I see a big difference between my work and personal life. Personally, I lean more toward being a Pioneer. I like trying new things and just going for it, so I appreciate collaborating with people who have different styles.' },
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Skipping the why behind a rule', d: 'Desiree keeps a protocol because she has traced what it protects. Probing for the exception first reads as dismissal.' },
            { t: 'Scoring only the outcome', d: 'A result that costs the team trust is one she counts as expensive. Widen what goes into the win.' },
          ],
          adopt: { t: 'Treat rapport as prep work', d: 'You wouldn\u2019t enter a decision without the numbers. Learning how she works is the same class of input \u2014 gather it once and every handoff after it moves faster.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean into shared reflective styles', d: 'Desiree has strong Guardian traits with Integrator strengths. Since you both value processes and details, work together there to find a real collaborative rhythm.' },
          { t: 'Pace deliberately', d: 'Leverage your mutual appreciation for details by collaborating to address questions. Encourage open dialogue to thoroughly explore issues.' },
          { t: 'Keep Progress Clear', d: 'Keep your teammate engaged and on track by sharing clear updates, structured steps, and practical checkpoints throughout your collaborative process.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t always default to the details', d: 'Avoid reining the conversation back in too quickly just because the lens widens. Cross-topic links are often where useful synthesis lives.' },
          { t: 'Don\u2019t let caution kill creativity', d: 'You instinctively spot risks, but leading with overt caution can shut down new possibilities. Acknowledge pitfalls, but stay open to fresh solutions.' },
          { t: 'Don\u2019t frame structure as constraint', d: 'Prevent a core Integrator disconnect by framing necessary processes as tools that support the team\u2019s overall peace of mind, rather than just strict rules.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Leading with the risk', d: 'You see the pitfall first and name it first. Said too early, it lands as a verdict on the idea instead of a check on it.' },
            { t: 'Narrowing the lens too soon', d: 'When she widens a topic she is usually connecting two things. Pulling back to detail cuts the synthesis short.' },
          ],
          adopt: { t: 'Make the checkpoint a conversation', d: 'Keep the cadence you\u2019d have built anyway, then spend each checkpoint asking what she is seeing. Same structure, and she gets the dialogue she works best inside of.' }, /* right column — 1 habit to adopt */
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
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Pitching before you ground it', d: 'A concept with no research under it asks her to trust the leap alone. Bring the two facts that make it plausible.' },
            { t: 'Reading structure as a cage', d: 'Her plans are how your ideas get somewhere to land. Use the scaffolding as a springboard, not a fence.' },
          ],
          adopt: { t: 'Bring her in while it\u2019s messy', d: 'She would rather be a resource than an audience. Invite her into ideation before the idea is finished and you keep your speed while she gets the collaboration.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Align your roles', d: 'Split tasks realistically, agree on who tackles what, and sync to share progress. She enjoys building momentum and driving great results with fellow Integrators.' },
          { t: 'Co-create holistic solutions', d: 'Keep dialogue open about the ripple effects of decisions and use your big-picture mindsets to anticipate challenges and outcomes.' },
          { t: 'Choose your Integrator approach', d: 'Identify your Integrator subtype: Teamer or Dreamer. Teamers should foster collaboration and open dialogue; Dreamers should emphasize empathy and consensus.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t let care become avoidance', d: 'Withholding a concern can be considerate in the moment, but it often leaves the person without the information they need to truly show up.' },
          { t: 'Don\u2019t endlessly weigh options', d: 'You connect easily, but temper your shared desire to over-explore all alternatives if you want to move things forward quickly.' },
          { t: 'Don\u2019t hesitate to be direct', d: 'Empathy crowds momentum when neither Integrator wants to be the one to push. Permit each other to practice direct feedback and unvarnished takes.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
            { t: 'Softening the concern away', d: 'Staying quiet feels considerate and leaves her working without something she needed. Say it plainly, and warmly.' },
            { t: 'Opening every alternative', d: 'Two big-picture thinkers can widen a question forever. Agree in advance where you stop exploring and start choosing.' },
          ],
          adopt: { t: 'Invite her off-hours Pioneer', d: 'Outside work Desiree leans Pioneer and likes just going for it. Call that version into the room when the two of you have been careful with each other for too long.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 4 ───── */
  {
    id: 'jeremy',              /* unique id — lowercase, no spaces */
    name: 'Jeremy K.',         /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 38, guardian: 50, pioneer: 55, integrator: 74 }, /* style-mix meter (0–100 each) — DRAFT: replace with Jeremy's real percentages */
    bio: [ /* left profile card — in his own words; titles written to match each quote */
      { h: 'Adapts to the situation', b: 'I like to explore what we both like to do and adapt my approach based on the situation. I prefer conversations that feel organic, because I think overly rigid labels can limit how we understand each other.' },
      { h: 'Confirms ownership early', b: 'I\u2019ve learned it helps to check in and make sure things are moving along. I try to confirm ownership early and follow up when needed so tasks stay on track.' },
      { h: 'Wants feedback direct', b: 'I appreciate direct communication. Tell me what didn\u2019t work, how I can improve it, or give me room to figure it out myself if that\u2019s the better fit.' },
      { h: 'Feels included through the work', b: 'I don\u2019t want to feel like I\u2019m not contributing. When someone delegates something to me, it helps me feel like I\u2019m part of the process. It makes the work feel shared.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Stay decisive and inclusive', d: 'Build stronger alignment with Jeremy by moving decisively and still making space for input and shared understanding.' },
          { t: 'Keep collaboration conversational', d: 'Keep communication open, regular, and conversational so Jeremy feels collaboration is natural, not transactional.' },
          { t: 'Be clear and make room to contribute', d: 'Be direct about goals, but invite Jeremy into the process so he feels involved and able to contribute.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t leave follow-through unclear', d: 'Delegating without clear expectations or follow-up can cause missed work; set expectations and check in to keep things on track.' },
          { t: 'Don\u2019t sideline input', d: 'Include Jeremy in the work in a way that lets him contribute, because he values being part of the process.' },
          { t: 'Don\u2019t wait too long to address issues', d: 'Bring up friction early and talk through problems before they grow, so you can improve the working relationship.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Closing the loop alone', d: 'You can decide and move on. Jeremy reads a call made without him as a signal he wasn\u2019t needed on it.' },
          { t: 'Delegating without the follow-up', d: 'Handing off the task is only half of it. Unclear expectations and no check-in are where he sees work go missing.' },
          ],
          adopt: { t: 'Delegate as a vote of confidence', d: 'You already route work to whoever can carry it. Say why it went to him, and the same instruction becomes the inclusion he\u2019s asking for \u2014 no softening required.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Name owners, not just steps', d: 'Jeremy confirms ownership early and follows up to keep things moving. Your process instinct hands him the clarity he was already chasing.' },
          { t: 'Say plainly what didn\u2019t work', d: 'He has asked for direct communication outright. Skip the cushioning and tell him what missed and how it could improve.' },
          { t: 'Hold the structure loosely', d: 'He prefers conversations that feel organic. Let your framework guide the work without scripting how the two of you talk about it.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t arrive with it finished', d: 'A plan presented fully formed leaves him no way in, and being part of the process is what makes work feel shared to him.' },
          { t: 'Don\u2019t stockpile concerns', d: 'Logging problems quietly until you have the whole picture costs time. He would rather hear the friction early and work it through.' },
          { t: 'Don\u2019t label him and stop looking', d: 'He thinks rigid categories limit how well people understand each other. Treat his archetype as a first read, not a conclusion.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Perfecting before you share', d: 'A draft revealed only once it is airtight gives him nothing to shape. Bring it while it still has holes in it.' },
          { t: 'Correcting without a path', d: 'Naming what broke is the part you find easy. He wants the second half \u2014 how to improve it, or room to solve it himself.' },
          ],
          adopt: { t: 'Turn the checklist into check-ins', d: 'You track the details regardless. Run that tracking as a short conversation rather than a status field, and he is included by the exact habit you already keep.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lead with momentum', d: 'As a Pioneer, you can move quickly and generate momentum. Collaborate by pairing energy with space for reflection, discussion, and shared input.' },
          { t: 'Share the big picture', d: 'Jeremy connects more easily when you explain the direction behind a big idea. Show the goal behind it and help him see how it ties to the work ahead.' },
          { t: 'Stay in sync', d: 'Stay consistent on check-ins and commitments. Jeremy responds well when your energy comes with reliability and follow-through.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t start without a plan', d: 'Outline collaboration framework and project timelines up front so you both have clarity and the freedom to innovate within your own schedules.' },
          { t: 'Don\u2019t rush to one solution', d: 'Do not rush to one solution before hearing others out. Integrators build stronger outcomes when you let them help shape the direction.' },
          { t: 'Don\u2019t change agreements on the fly', d: 'Avoid making commitments and then altering them unexpectedly, as this creates confusion. Let them know in advance if something might change.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Moving the target mid-project', d: 'Revising a commitment feels adaptive to you. He built his follow-up around the version the two of you agreed to.' },
          { t: 'Solving it before he answers', d: 'Your first idea arrives fast and lands hard. Leave him the beat to shape the direction instead of confirming yours.' },
          ],
          adopt: { t: 'Let your energy carry a plan', d: 'Put the timeline inside the pitch. You keep the momentum you like generating, and he gets the reliability that lets him run alongside you.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Divide the work out loud', d: 'You both want to be genuinely in it. Agree early on who carries what so neither of you ends up hovering at the edge of the task.' },
          { t: 'Let the conversation wander', d: 'Jeremy prefers exchanges that feel organic. Two Integrators can use that room to surface what a tight agenda would have skipped.' },
          { t: 'Ask which kind of help he wants', d: 'He will take a fix or the space to solve it himself. Asking which costs one sentence and saves you offering the wrong kind of support.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t soften the feedback', d: 'He asked for it straight. Wrapping a critique until it disappears leaves him without the one thing he told you he wanted.' },
          { t: 'Don\u2019t assume shared understanding', d: 'Rapport comes easily between you, which makes it easy to skip confirming ownership. Say the specifics out loud anyway.' },
          { t: 'Don\u2019t protect him from the work', d: 'Holding a task back to spare him is the fastest way to make him feel sidelined. Hand it over instead.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Trading input for reassurance', d: 'Encouragement is the easy currency between two Integrators. What he asked for is what didn\u2019t work and how to fix it.' },
          { t: 'Waiting to be invited in', d: 'When both of you are making room, the work can sit unclaimed. Name what you are taking and hand him the rest.' },
          ],
          adopt: { t: 'Borrow his adaptability', d: 'Jeremy adapts to whoever is in the room and distrusts fixed labels. Borrow that, and your read of a teammate becomes a moving target rather than a category.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 5 ───── */
  {
    id: 'joe',                 /* unique id — lowercase, no spaces */
    name: 'Joe R.',            /* e.g. 'Max R.' */
    arch: 'guardian',          /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 50, guardian: 78, pioneer: 46, integrator: 42 }, /* style-mix meter (0–100 each) — DRAFT: replace with Joe's real percentages */
    bio: [ /* left profile card — DRAFT, drawn from Joe's own advice blocks; replace with his words */
      { h: 'At their best', b: 'Joe pairs Guardian rigor with a creative lens \u2014 he will pressure-test an idea and then help sharpen it, with his commitment to CalPERS members running through both.' },
      { h: 'Under pressure', b: 'He wants proven ground. When the information is thin he slows down, looks for precedent and evidence, and can keep turning a problem over past the point of usefulness.' },
      { h: 'What earns their trust', b: 'Preparation and follow-through. Signal whether you need the bottom line or the full breakdown, bring the tradeoffs along with the pitch, and he engages openly.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lead with shared values', d: 'Joe thrives on shared purpose and alignment. Use your focus to align on strategy and show you\u2019re onboard with his deep commitment to CalPERS members.' },
          { t: 'Calibrate risk tolerance', d: 'Validate a Guardian\u2019s cautious nature by letting them build the contingency plan, and control over unknowns to make them feel secure with forward momentum.' },
          { t: 'Share the big picture and context', d: 'Match his flexible communication style by providing a clear signal on the depth you need from project details. Communicate whether you need the bottom line or a full breakdown.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t override the guardrails', d: 'Bold pivots read as disregard for hard-won stability. Position new ideas as targeted improvements built on what\u2019s already working, acknowledging the foundation.' },
          { t: 'Don\u2019t move at speed without diligence', d: 'Moving fast can feel reckless to a Guardian. Set checkpoints to ask them what evidence they need to feel confident. Frame diligence as a quality gate, not a delay.' },
          { t: 'Don\u2019t trust instinct alone', d: 'Deciding on partial information unsettles a Guardian who wants proven ground. Skipping tradeoffs and downsides makes your Driver confidence look like guesswork.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Calling it on partial information', d: 'You are comfortable deciding at seventy percent. To Joe, a call made on thin evidence looks like guesswork rather than speed.' },
          { t: 'Pitching the upside only', d: 'A case with no tradeoffs in it reads as unfinished. Name the downside before he has to go find it himself.' },
          ],
          adopt: { t: 'Make diligence a quality gate', d: 'You already refuse to ship broken work. Fold the evidence check into that same standard instead of treating it as delay, and his rigor starts serving your timeline.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Celebrate Consistency', d: 'Acknowledge and appreciate each other\u2019s dependability. Positive reinforcement of this shared value strengthens motivation and team cohesion.' },
          { t: 'Divide the deep dive', d: 'Split up research and preparation rather than duplicating effort. Trust your fellow Guardian\u2019s rigor instead of re-checking their work.' },
          { t: 'Channel your secondary chemistry styles', d: 'Similar chemistry styles benefit from leaning into their secondary styles. By adding different perspectives, your work becomes even more complete.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t fully default to precedent', d: 'Challenge yourselves to ask whether the current way of doing things is really the best way to reach your goal. Consider fresh perspectives based on your knowledge.' },
          { t: 'Don\u2019t overanalyze', d: 'Guardians can turn problems over endlessly looking for \u201Cwhys.\u201D Agree upfront on which unknowns actually block the decision, and set the rest aside.' },
          { t: 'Don\u2019t neglect the big picture', d: 'Don\u2019t get so absorbed in details that you forget the bigger purpose; regularly step back together to ensure your work supports the broader mission.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Re-checking his half', d: 'Two Guardians can audit the same thing twice over. Split the research and trust his rigor on the part you handed him.' },
          { t: 'Chasing every unknown', d: 'Not every open question blocks the decision. Agree at the start which ones do, and put the rest down.' },
          ],
          adopt: { t: 'Schedule the step back', d: 'Put a recurring moment on the calendar to check the work against the broader mission. It is a structural habit, which is exactly why it will hold for both of you.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Leverage their creativity for problem solving', d: 'Joe brings a creative lens to the Guardian perspective; lean into it. Carve out space to riff together on open problems, and you\u2019ll find his creativity sharpens your thinking as much as yours sharpens his.' },
          { t: 'Balance speed and synthesis', d: 'When a change is required, acknowledge the potential domino effect on the details Guardians care about and explain why the change is needed. Position change as an evolution rather than a replacement.' },
          { t: 'Share the big picture and context', d: 'Pioneers bring bold ideas and Guardians pressure-test them. Use their instinct for detail as a strength. Intentionally lean on your Guardian teammate to serve as a grounded reality check.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t share ideas without evidence', d: 'Enthusiasm alone can feel thin to a Guardian. Pair your vision with data, precedent, or a clear track record so Joe can evaluate the idea on the substance, not just the energy behind it.' },
          { t: 'Don\u2019t improvise without preparation', d: 'Guardians engage more openly when they know whether you\u2019re brainstorming or proposing ideas. Bring a clear agenda and signal which mode you\u2019re in so Joe can meet you there.' },
          { t: 'Don\u2019t rush the clock', d: 'Consciously slow down your natural urge to move fast, make gut-feeling decisions, and change direction on the fly.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Pitching on enthusiasm', d: 'Energy on its own reads thin to him. Bring the data, the precedent, or the track record so he can judge the idea on substance.' },
          { t: 'Leaving the mode unsaid', d: 'He engages differently with a brainstorm than with a proposal. Say which one you are doing before you start talking.' },
          ],
          adopt: { t: 'Frame the change as evolution', d: 'You tell the story better than anyone in the room. Tell it as an improvement built on what already works, and he hears a foundation being extended rather than replaced.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean into shared reflective styles', d: 'A Guardian will likely appreciate your tendency to be introspective and considerate. Think things through together and they\u2019ll feel in sync.' },
          { t: 'Set pace', d: 'When starting new projects or initiatives, ask Guardians to help establish timelines & checkpoints. This ensures the team benefits from their structured approach.' },
          { t: 'Encourage thoughtful input', d: 'Invite them to share their perspective on potential risks or challenges, and listen without immediately steering the conversation toward consensus.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t lock into high level thinking', d: 'Avoid jumping from topic to topic or only addressing issues superficially. Guardians appreciate thoroughness and clear, focused discussions.' },
          { t: 'Don\u2019t neglect solo processing', d: 'Although you both appreciate collaborative discussions, respect the Guardian\u2019s need to process new information independently when they want to delve deeper.' },
          { t: 'Don\u2019t skip details', d: 'Don\u2019t get so caught up in the big picture that you ignore the important details they\u2019re attuned to. This can leave them feeling sidelined and concerned for future issues.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Steering toward agreement', d: 'When he raises a risk, let it sit in the room. Moving the group to consensus early buries the thing he was trying to hand you.' },
          { t: 'Keeping it collaborative throughout', d: 'He needs to work through new information alone before he can discuss it. Solo time is not him disengaging from you.' },
          ],
          adopt: { t: 'Let him set the checkpoints', d: 'You already open a project by aligning the people on it. Hand Joe the timeline and the checkpoints, and your instinct for inclusion is what gives the team his structure.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 6 ───── */
  {
    id: 'theresa',             /* unique id — lowercase, no spaces */
    name: 'Theresa R.',        /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 46, guardian: 54, pioneer: 33, integrator: 67 }, /* style-mix meter (0–100 each) — from her assessment */
    bio: [ /* left profile card — in her own words */
      { h: 'I\u2019m your teammate', b: 'I\u2019m always open to hearing your thoughts and ideas. Don\u2019t let my title make you feel hesitant \u2014 I\u2019m just a person, and I want you to feel comfortable reaching out. Sometimes \u201Cmanagement\u201D sounds intimidating, but I\u2019m here as part of the team.' },
      { h: 'Recognition matters', b: 'I want everyone to feel that their efforts are seen and appreciated. Creating a culture where contributions are celebrated makes people feel like they belong and encourages everyone.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Build decisions together', d: 'Set up working sessions where you bring momentum and the Integrator brings thoughtfulness. Together, your decisions will be both fast and well-considered.' },
          { t: 'Invite input', d: 'Give ideas room to be shared and discussed. Once that groundwork is set, lean on your decisiveness to push final outcomes across the finish line.' },
          { t: 'Challenge for broader insights', d: 'Your Driver instinct to challenge ideas complements an Integrator\u2019s high-level perspective. Use it to explore tough questions together.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t skip the active listening', d: 'If you\u2019re shaping your next point mid-sentence, you\u2019re likely not actually absorbing what they\u2019re saying. Let what they say land before you respond.' },
          { t: 'Don\u2019t sit on a problem', d: 'Don\u2019t wait until you\u2019ve 100% solved a problem to bring it up. Even if you like working things out on your own, sharing early keeps you both on the same page.' },
          { t: 'Don\u2019t hide the \u201Chow\u201D', d: 'While you may prefer to skip to the bottom line, Integrators like to see the practical, linear progression of an idea. Take them through your thought process.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Skipping to the bottom line', d: 'The conclusion is all you need. She wants the path that got you there, and without it the decision is harder for her to stand behind.' },
          { t: 'Solving it to one hundred percent first', d: 'You would rather arrive with it finished. Handed over that late, it reads to her as having been shut out of the problem.' },
          ],
          adopt: { t: 'Let the point land before you answer', d: 'You already listen for the weak spot in an argument. Let the sentence finish before you start building the reply and you get a cleaner read plus her trust in one move.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean on her Guardian side', d: 'Guardian is her strongest secondary style, so the structure you bring lands as support rather than rigidity. Build the plan with her and she will hold it.' },
          { t: 'Bring the concern early', d: 'She would rather hear an unresolved problem than a polished one. Raise the risk while it is still forming and she will work it through with you.' },
          { t: 'Name what went well', d: 'Recognition is the culture she is trying to build. If your updates only ever flag exceptions, say what worked too \u2014 it costs a sentence and she notices.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t let the title slow you down', d: 'She has said plainly that management should not make you hesitant. Waiting for permission to raise something costs her the input she actually wants.' },
          { t: 'Don\u2019t lead with everything wrong', d: 'Your eye for defects is useful, but an update made entirely of risk reads as a verdict on the team rather than a check on the work.' },
          { t: 'Don\u2019t process it all alone', d: 'You prefer to arrive with the answer finished. She would rather be in the thinking with you, and the rigor you bring still counts once she is in it.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Reporting only the exceptions', d: 'A status update built from risks and defects is accurate and cold. She is trying to build a team where effort gets named out loud.' },
          { t: 'Holding the draft until it is sound', d: 'Certainty takes time you do not have to spend alone. Bring it half-built and she will help you close the gap.' },
          ],
          adopt: { t: 'Put recognition in the process', d: 'You run the checkpoint anyway. Add one line naming who carried what, and the culture she is after gets built by the structure you were already keeping.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Explore ideas side by side', d: 'Theresa also identifies with Pioneer traits. You can engage that side of her by proposing out of the box ideas that you both can ideate on and explore together.' },
          { t: 'Build on shared openness', d: 'Pioneers and Integrators both adapt easily and stay open to new ideas. Use that common ground to keep plans moving and adaptable.' },
          { t: 'Let ideas breathe', d: 'Give your teammate room to talk through ideas with you and others. That process builds deeper commitment and more thoughtful outcomes.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t leave practicality behind', d: 'Pitching new ideas without context can cause disconnects. Approach imaginative concepts with practical reality to help everyone see the bigger picture.' },
          { t: 'Don\u2019t overlook the fine print', d: 'Bring your teammate into the details early. The concerns they help surface now are easier to fix than problems that might arise later on.' },
          { t: 'Don\u2019t pivot in silence', d: 'If you ever decide to shift your strategy, make a point to communicate it clearly. Changing directions without warning can leave people feeling confused or ignored.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Pitching with no ground under it', d: 'An imaginative concept with no practical reality attached creates a disconnect. Land the idea before you launch it.' },
          { t: 'Shifting strategy quietly', d: 'Changing direction without saying so leaves people feeling ignored. Announce the pivot as clearly as you announced the plan.' },
          ],
          adopt: { t: 'Bring her in at the detail stage', d: 'You would rather stay at altitude, and she is comfortable in the fine print. Invite her there early and the concerns she surfaces cost far less now than later.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Build on shared chemistry', d: 'You both thrive in positive, supportive environments, and she loves to recognize the team\u2019s hard work. Highlight successes and show appreciation for effort.' },
          { t: 'Channel your secondary styles', d: 'Like-type pairs benefit from leaning into their secondary chemistry styles. By adding different perspectives, your work becomes even more complete.' },
          { t: 'Keep up with regular touchpoints', d: 'Check in with her consistently. Theresa prioritizes making sure people feel supported, which aligns with your own focus on relationships and well-being.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t let care become avoidance', d: 'Withholding a concern can feel considerate in the moment, but it often leaves the other person without the information they need to show up fully.' },
          { t: 'Don\u2019t skip the active listening', d: 'Reading the room is a big Integrator strength, but the words themselves carry things the mood alone can\u2019t. Make sure both are getting through!' },
          { t: 'Don\u2019t take directness personally', d: 'If a conversation gets straight to the point, or if she has to correct something; remember it\u2019s about the work, not a personal attack.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Reading the mood for the message', d: 'You are both good at the room. Tone carries a great deal, but it will not carry the specifics \u2014 those still have to be said.' },
          { t: 'Withholding it to be kind', d: 'A concern held back leaves her working without something she needed. Considerate in the moment, expensive by Thursday.' },
          ],
          adopt: { t: 'Take her at her word on hierarchy', d: 'She has asked not to be treated as a title. Bring her the half-formed thought you would bring a peer, and the openness she is offering actually gets used.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 7 ───── */
  {
    id: 'kara',                /* unique id — lowercase, no spaces */
    name: 'Kara F.',           /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 44, guardian: 56, pioneer: 48, integrator: 70 }, /* style-mix meter (0–100 each) — DRAFT: replace with Kara's real percentages */
    bio: [ /* left profile card — DRAFT, drawn from Kara's own advice blocks; replace with her words */
      { h: 'At their best', b: 'Kara builds team connection on purpose. She cares about the quality of the work and the people delivering it in equal measure, and treats those as the same problem.' },
      { h: 'Under pressure', b: 'She iterates. Thoughtful consideration beats a quick decision for her, and she would rather a first version be imperfect than rushed into place.' },
      { h: 'What earns their trust', b: 'Independence, once it is earned \u2014 she goes hands-off with people who run their own work. She also notices when you acknowledge a standard before asking to break it.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Forge unified solutions', d: 'Informed decisions matter to you. When Drivers allow time for Integrators to gather input and build consensus, it leads to more robust solutions.' },
          { t: 'Be open to alternatives', d: 'Integrators prefer an iterative and collaborative process. They are open to changing their minds; anticipate alternative solutions or compromises.' },
          { t: 'Ask questions and listen actively', d: 'If you dismiss an Integrator\u2019s view and they seem uncomfortable, invite them to explain. Listen and restate their perspective to confirm you understand.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t steamroll decision making', d: 'Integrators need time to build agreement and ensure multiple perspectives are accounted for. Skipping this process can raise concerns about future pitfalls.' },
          { t: 'Don\u2019t override responsibilities', d: 'Drivers often bring energy and determination to projects, but it\u2019s important to avoid unintentionally overshadowing your Integrator teammate. Make space for their input and ideas, so everyone feels valued and collaboration thrives.' },
          { t: 'Don\u2019t skip the warm-up', d: 'Don\u2019t launch straight into the details. A short, genuine opening beat is all she needs to feel connected, after which she\u2019ll match your pace for the rest of your time.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Deciding while she is still gathering', d: 'She builds agreement before she commits. A call made mid-process does not just move fast, it removes the reason she would have backed it.' },
          { t: 'Taking the whole room', d: 'Your energy fills the space without meaning to. Leave the pause long enough that she can actually use it.' },
          ],
          adopt: { t: 'Restate it before you rebut', d: 'You are quick to test an argument. Say her version back first and the test still happens \u2014 it just lands as partnership rather than dismissal.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Lean into shared reflective styles', d: 'You both value thoughtfulness. Your Guardian instinct for the domino effects of changes complements her connective thinking.' },
          { t: 'Rally around the team', d: 'Because you both care intensely about quality and teamwork, your shared instinct to build team connection can be a point of joy between you.' },
          { t: 'Run with autonomy', d: 'Integrators value collaboration but can be \u201Chands-off\u201D with highly independent workers. Capitalize on this to process things independently whenever you need to delve deeper.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t dismiss the value of iteration', d: 'Both of you value thoughtful consideration over quick decisions. Rely on this iterative process, understanding that things may not be perfect on the first try.' },
          { t: 'Don\u2019t rush to identify problems', d: 'While Guardians naturally spot risks, don\u2019t let concerns stifle ideas. Encourage ideation, so potential solutions can emerge before focusing on risks.' },
          { t: 'Don\u2019t always default to the details', d: 'Avoid reining the conversation back in too quickly just because the lens widens. Cross-topic links are often where the useful synthesis lives.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Treating version one as the verdict', d: 'She works by iteration. Judging the first draft as though it were final ends a process that was doing its job.' },
          { t: 'Leading every idea with the risk', d: 'You will spot the flaw first, reliably. Let a solution surface before the concern does and you still get to raise it.' },
          ],
          adopt: { t: 'Make thoroughness the shared pace', d: 'You both prefer considered over quick. Name that as the working agreement and your caution stops reading as friction and starts reading as the schedule.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Leverage their creativity', d: 'Kara has a creative edge with: content, strategy, and copy. Work together there and you\u2019ll find a real collaborative rhythm.' },
          { t: 'Provide storytelling with context', d: 'Encourage open brainstorming to generate creative ideas, but also make sure to set aside dedicated time to organize, prioritize, and refine those ideas together.' },
          { t: 'Build Personal Connections', d: 'Integrators connect through narrative and emotion. Framing concepts as relatable stories about real people often lands better than abstract theory.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t race past the planning', d: 'While Pioneers thrive on continuous ideation, Integrators need moments to build structure. Pause to organize concepts and map out execution.' },
          { t: 'Don\u2019t dismiss structure or process', d: 'Acknowledge the standard, then make the case for the exception. She\u2019ll often be your biggest ally in breaking the rule once she sees you respect it.' },
          { t: 'Don\u2019t jump in without scaffolding', d: 'Outline collaboration framework and timelines for projects up front so you have the freedom to innovate while she enjoys the predictability.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Generating without a pause', d: 'Continuous ideation is your engine. She needs a stop to organize the concepts and map execution before the next wave arrives.' },
          { t: 'Skipping the standard entirely', d: 'Name the rule you want to break and why it exists. She will help you break it; she will not help you ignore it.' },
          ],
          adopt: { t: 'Schedule the refining session', d: 'Keep the open brainstorm you like running. Put a second, narrower meeting after it for prioritizing, and she gets her structure without costing you any range.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Think big-picture together', d: 'As Integrators, both of you see connections everywhere. Pair on forward-thinking ideas together to find a symbiotic collaboration space.' },
          { t: 'Converge', d: 'Agree on main topics and dive into them after going high-level. Don\u2019t get so caught up in the big picture that you ignore the important details that live within them.' },
          { t: 'Channel your secondary types', d: 'Like-type pairs benefit from leaning into their secondary styles. By adding different perspectives, your work becomes even more complete.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t weigh endless options', d: 'You connect easily, but temper your shared desire to over-explore all alternatives if you want to move things forward quickly.' },
          { t: 'Don\u2019t pursue consensus at all costs', d: 'You both value every voice in a room, however this can dilute decisions. Integrators value innovation and can agree to disagree when consensus would dull the outcome.' },
          { t: 'Don\u2019t tiptoe around each other', d: 'Empathy crowds momentum when neither Integrator wants to be the one to push. Permit each other to practice direct feedback and unvarnished takes.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Counting every voice equally', d: 'You both want the whole room included. She would rather agree to disagree than let consensus dull the outcome \u2014 let her.' },
          { t: 'Staying at altitude together', d: 'Two big-picture thinkers can circle a topic indefinitely. Converge on the main ones, then go into the details that live inside them.' },
          ],
          adopt: { t: 'Trade unvarnished takes on purpose', d: 'Neither of you wants to be the one who pushes. Give each other standing permission to be blunt and the empathy stops costing you both momentum.' }, /* right column — 1 habit to adopt */
        },
      },
    },
  },

  /* ───── MEMBER 8 ───── */
  {
    id: 'carrie',              /* unique id — lowercase, no spaces */
    name: 'Carrie T.',         /* e.g. 'Max R.' */
    arch: 'integrator',        /* THEIR style: 'driver' | 'guardian' | 'pioneer' | 'integrator' */
    mix: { driver: 21, guardian: 29, pioneer: 11, integrator: 39 }, /* from her interview: 39 integrator / 29 guardian / 11 pioneer; driver is the remainder — confirm */
    bio: [ /* left profile card — her own words from the 07/14 interview, lightly tightened */
      { h: 'Thinks first, then collaborates', b: 'I\u2019m collaborative, but I also need time to think. I like to separate and think on my own, then collaborate once I have a perspective of my own. It\u2019s challenging for me to think out loud.' },
      { h: 'Hangs onto the details', b: 'I\u2019m very detailed in how I work \u2014 integrator first, guardian next. I\u2019m a good listener, and if I remember something I\u2019ll bring it up and call it out.' },
      { h: 'Feedback from someone on your side', b: 'The best delivery is someone who\u2019s on your side and wants you to do well. From a teammate I trust, verbal works. From further out, I\u2019d rather have it bulleted, listed, asynchronous.' },
      { h: 'Working on moving faster', b: 'I really want to be a driver, even though I\u2019m not. I\u2019ve had feedback that I work slowly, so I\u2019m more open to change and moving faster than I used to be.' },
    ],
    advice: { /* 4 blocks — one per VIEWER style */
      driver:     { /* what a Driver viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Cut the meeting that repeats itself', d: 'Back-to-back standups that restate the same status drain Carrie faster than the work does. Your instinct to kill a redundant meeting reads to her as respect.' },
          { t: 'Send it before you discuss it', d: 'She takes in information, then thinks, then contributes. A short pre-read gets you her real analysis instead of her first reaction.' },
          { t: 'Bring options, not a verdict', d: 'Carrie likes seeing several options on the table before she decides. Bring two or three and she commits faster than if you bring only one.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t overlook details', d: 'Drivers may be quick to move past finer points, but Carrie\u2019s thoughtful observations offer valuable insights. Incorporate her input to strengthen outcomes.' },
          { t: 'Don\u2019t wave off the small thing', d: 'When she flags something minor, the instinct is to say it isn\u2019t worth the time. She tends to remember the ones that turned out to matter.' },
          { t: 'Don\u2019t read quiet as agreement', d: 'She thinks carefully about what she wants to say before she says it. Silence in the room usually means she is still working, not that she is on board.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Thinking out loud at her', d: 'You work a problem by talking it through. She works it by going quiet first, so the live volley gets you her draft rather than her analysis.' },
          { t: 'Dismissing the minor point', d: 'Drivers and Pioneers tend to say don\u2019t worry about that. She has watched enough minor points turn into rework.' },
          ],
          adopt: { t: 'Send the material ahead', d: 'You already run a tight agenda. Send the material the day before and the same meeting gets you her full thinking instead of a first impression, at no cost to your clock.' }, /* right column — 1 habit to adopt */
        },
      },
      guardian:   { /* what a Guardian viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Protect her solo time', d: 'Like Guardians, Carrie values time to work independently. Make the most of this by giving her space to process and explore ideas on her own whenever deeper thinking is needed.' },
          { t: 'Dive in when she calls something out', d: 'Carrie prides herself on being a good listener who hangs onto details and brings them up when needed. Reciprocate by paying close attention and going deeper with her.' },
          { t: 'Give her information to process in advance', d: 'Carrie prefers to receive information and think about it on her own before discussing it with the group. If possible, send materials ahead of time so she feels prepared to collaborate.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t fill the calendar to stay aligned', d: 'Standups plus status meetings that cover the same ground empty her tank faster than the work. If the update can be written down, write it down.' },
          { t: 'Don\u2019t make her wait on approvals', d: 'She works best where people comment directly and nothing sits in a chain of command. Unblock her in the document rather than in a meeting.' },
          { t: 'Don\u2019t leave it at a working relationship', d: 'She has said it takes real effort to reach past the few people she already trusts. A standing 1:1 does more for the two of you than another group call.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Meeting in order to stay aligned', d: 'Two thorough people can meet about the work until there is no time left inside it. Write the update instead.' },
          { t: 'Routing everything through approval', d: 'She has seen how fast things move when people comment directly. The chain of command is where her momentum goes.' },
          ],
          adopt: { t: 'Make the 1:1 a standing invite', d: 'You keep the calendar anyway. Put a recurring 1:1 on it and the relationship she says takes real effort gets built by the structure you were already maintaining.' }, /* right column — 1 habit to adopt */
        },
      },
      pioneer:    { /* what a Pioneer viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Point the idea at strategy', d: 'Carrie feels innovative but practical \u2014 she would rather take a trusted approach somewhere new than invent from nothing. Strategy and planning are where you two click.' },
          { t: 'Put a coffee chat on the calendar', d: 'At a previous job, scheduled 1:1s and coffee chats counted as work time. She misses that, and it is the fastest route past a purely working relationship.' },
          { t: 'Let her come back to it', d: 'Give her the concept and a day. She returns with a considered read that a live session was never going to produce.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t expect the answer in the room', d: 'Carrie does her sharpest thinking once she has the information, not during the pitch. Share the idea ahead of time and what comes back is worth the wait.' },
          { t: 'Don\u2019t wave off the practical question', d: 'She likes what is trusted and will ask how the idea actually runs. That question is her buying in, not pushing back.' },
          { t: 'Don\u2019t mistake pace for interest', d: 'She has been told before that she works slowly, and moving faster is something she is deliberately working on. Her speed is not a measure of how invested she is.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Expecting the live riff', d: 'Brainstorming out loud is your home turf. Ask her for the same thing cold and you get her politeness rather than her ideas.' },
          { t: 'Skipping the how', d: 'She is practical before she is inventive. The idea lands once she can see the version of it that actually runs.' },
          ],
          adopt: { t: 'Split the session in two', d: 'Pitch it, sleep on it, reconvene. You keep the open brainstorm you like and she arrives at the second half with something neither of you would have generated live.' }, /* right column — 1 habit to adopt */
        },
      },
      integrator: { /* what an Integrator viewer sees */
        engage: [ /* "How to engage" card — 3 tips */
          { t: 'Gather everyone\u2019s point of view', d: 'Carrie feels in sync when everyone works together to get input from SMEs, IT, and other stakeholders. Partner up to make sure everyone is heard and on board.' },
          { t: 'Trade the details you each caught', d: 'You are both in tune with the small things. Comparing what each of you noticed is where the pair of you is strongest together.' },
          { t: 'Lean on the Guardian in her', d: 'Guardian runs a close second for Carrie. Pair that with whatever runs second for you so you are not both covering the same ground.' },
        ],
        lose: [ /* "How to lose" card — 3 tips */
          { t: 'Don\u2019t save the hard note for the group', d: 'Sensitive feedback lands best from someone she trusts, said directly. Delivered in a room, it costs her far more than it costs you.' },
          { t: 'Don\u2019t collect options forever', d: 'You both like seeing every alternative before deciding. Agree on when the list closes, or the two of you will keep adding to it.' },
          { t: 'Don\u2019t soften it into nothing', d: 'She would rather hear it plainly from someone who is on her side. Kindness belongs in the delivery, not in the content.' },
        ],
        build: { /* bottom "Build skills" card */
          drop: [ /* left column — 2 habits to drop */
          { t: 'Waiting for the circle to widen', d: 'You both default to the people you already trust. Neither of you reaches out first unless one of you puts it on a calendar.' },
          { t: 'Adding one more option', d: 'You both want the full set in front of you before choosing. Say out loud when the list is closed.' },
          ],
          adopt: { t: 'Be the trusted one who says it', d: 'She has told you exactly how hard feedback works for her: from someone on her side, delivered directly. Being that person is a move you are already equipped to make.' }, /* right column — 1 habit to adopt */
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
  /* 10 dots span 0–100. Whole dots light up per 10 points; the remainder
     partially fills the next dot so the row reads the exact value. */
  const p = Math.max(0, Math.min(100, Number(pct) || 0));
  const full = Math.floor(p / 10);
  const part = Math.round((p % 10) * 10); /* leftover as a 0–100% width */
  return Array.from({ length: 10 }, (_, i) => {
    if (i < full) return '<span class="on"></span>';
    if (i === full && part > 0) return `<span class="on partial" style="--fill:${part}%"></span>`;
    return '<span></span>';
  }).join('');
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
