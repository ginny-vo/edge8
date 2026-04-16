export type ServiceSlug =
  | 'ai-in-business-workshop'
  | 'your-first-ai-hire'
  | 'ai-capabilities-audit'
  | 'caio-leadership'
  | 'global-staffing'
  | 'training-and-certification';

export type ServiceData = {
  slug: ServiceSlug;
  navTitle: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image?: string;
  accent: 'mint' | 'blue' | 'orange' | 'gold';
  heroStats: { label: string; value: string }[];
  proofPoints: string[];
  outcomes: { title: string; body: string }[];
  process: { phase: string; title: string; body: string }[];
  fit: string[];
  deliverables: string[];
  ctaTitle: string;
  ctaBody: string;
};

export const services: ServiceData[] = [
  {
    slug: 'ai-in-business-workshop',
    navTitle: 'AI in Business Workshop',
    title: 'AI in Business Workshop',
    eyebrow: 'Interactive Executive Enablement',
    summary:
      'Align leadership, create common language around AI, and leave with practical next steps your team can execute immediately.',
    intro:
      'This workshop is designed for leadership teams that need substance, not hype. We combine live strategy framing, real case studies, and hands-on working sessions so teams understand where AI fits, where it does not, and what to do next.',
    accent: 'gold',
    heroStats: [
      { label: 'Session Format', value: 'Private or public' },
      { label: 'Typical Audience', value: 'Leaders + operators' },
      { label: 'Outcome', value: '90-day action plan' },
    ],
    proofPoints: [
      'Executive-friendly framing that makes AI adoption less abstract.',
      'Live examples pulled from sales, recruiting, operations, and content workflows.',
      'Built to convert curiosity into a concrete internal roadmap.',
    ],
    outcomes: [
      {
        title: 'Leadership alignment',
        body: 'Create a shared vocabulary for AI, clarify what success looks like, and reduce the usual noise around disconnected tools.',
      },
      {
        title: 'Use-case prioritization',
        body: 'Identify where AI can create measurable leverage first, instead of spreading effort across too many experiments.',
      },
      {
        title: 'Actionable next steps',
        body: 'Leave with a short-list of workflows, owners, and implementation priorities the team can act on immediately.',
      },
    ],
    process: [
      {
        phase: 'Step 1',
        title: 'Context intake',
        body: 'We review team goals, maturity, and pressure points so the workshop content fits the organization instead of staying generic.',
      },
      {
        phase: 'Step 2',
        title: 'Live workshop',
        body: 'We facilitate an interactive session covering AI fundamentals, implementation examples, and high-value use cases tailored to the room.',
      },
      {
        phase: 'Step 3',
        title: 'Post-session roadmap',
        body: 'You receive a practical recommendation set for the next 30 to 90 days, including where to start and how to sequence the work.',
      },
    ],
    fit: [
      'Leadership teams exploring AI adoption for the first time',
      'Organizations that need alignment before building systems',
      'Executives who want practical education rather than technical theater',
      'Teams preparing for a broader AI program or training rollout',
    ],
    deliverables: [
      'Tailored workshop agenda',
      'Use-case prioritization framework',
      'Implementation recommendations',
      'Follow-up summary for internal stakeholders',
    ],
    ctaTitle: 'Get your team aligned before you invest deeper.',
    ctaBody:
      'Use the workshop to establish common ground, identify fast wins, and create a stronger starting point for the rest of your AI program.',
  },
  {
    slug: 'your-first-ai-hire',
    navTitle: 'Your First AI Hire',
    title: 'Your First AI Hire Will Either Prove AI Works Or Waste a Year Proving It Doesn’t.',
    eyebrow: 'Placement + Training + Support',
    summary:
      'We recruit, train, and support your first AI engineer so they ship results from month one instead of failing alone in a vacuum.',
    intro:
      'Most first AI hires fail for predictable reasons: companies cannot evaluate talent well, the hire lacks business context, and there is no support system once they start. This offer is built to de-risk the first hire with training, accountability, and continuous guidance.',
    image: '/images/services/first-ai-hire-hero.jpg',
    accent: 'orange',
    heroStats: [
      { label: 'Talent Match', value: '2 to 4 weeks' },
      { label: 'Program Length', value: '90 days' },
      { label: 'Guarantee', value: '60-day replacement' },
    ],
    proofPoints: [
      'Avoid the usual 6 to 12 months of quiet failure.',
      'Combine recruiting, training, and operating support into one launch path.',
      'Create proof that AI can work inside your actual business environment.',
    ],
    outcomes: [
      {
        title: 'Hire with better signals',
        body: 'We recruit and vet for trainability, execution ability, and business fit rather than keyword-heavy interview performance.',
      },
      {
        title: 'Ship a quick win early',
        body: 'The first month is structured around an intensive ramp and a fast automation deliverable that demonstrates traction.',
      },
      {
        title: 'Build momentum instead of skepticism',
        body: 'Weekly planning, dotted-line management, and AI Officer training reduce the odds of isolation and expensive drift.',
      },
    ],
    process: [
      {
        phase: 'Month 0',
        title: 'Free talent match',
        body: 'We source and vet candidates, present recommended hires, and only start the paid engagement after you approve the match.',
      },
      {
        phase: 'Month 1',
        title: 'Train and ship',
        body: 'Your new hire completes intensive AI training while onboarding into your environment and delivering a first practical automation.',
      },
      {
        phase: 'Month 2 to 3',
        title: 'Produce real ROI',
        body: 'We maintain planning cadence, accountability, and certification support so the hire starts generating repeatable business value.',
      },
    ],
    fit: [
      'Mid-sized companies making their first serious AI hire',
      'Leadership teams that know AI matters but cannot benchmark talent yet',
      'Non-tech-native businesses that need support around the hire',
      'Organizations that want execution, not AI theater',
    ],
    deliverables: [
      'Vetted first AI hire',
      'Structured onboarding and training plan',
      'Quick-win automation shipped in month one',
      'Ongoing support and replacement guarantee',
    ],
    ctaTitle: 'Your first AI hire should become a case study, not a warning story.',
    ctaBody:
      'Use this model to validate AI at your company quickly and build a foundation for future hiring with far less risk.',
  },
  {
    slug: 'ai-capabilities-audit',
    navTitle: 'AI Capabilities Audit',
    title: 'AI Capabilities Audit',
    eyebrow: 'Readiness + Roadmap',
    summary:
      'Assess how prepared your organization is for AI adoption, then turn the findings into a practical roadmap for the next 12 months.',
    intro:
      'The audit is for teams that want clarity before they invest deeper. We evaluate current maturity, capture workflow opportunities, and turn the findings into a prioritised rollout plan instead of a vague innovation deck.',
    image: '/images/services/audit-growth-stage.jpg',
    accent: 'blue',
    heroStats: [
      { label: 'Focus', value: 'Readiness + opportunities' },
      { label: 'Output', value: '12-month roadmap' },
      { label: 'Use Case', value: 'Leadership planning' },
    ],
    proofPoints: [
      'Measure current maturity across leadership, workflows, and adoption.',
      'Prioritize the most promising opportunities instead of chasing every AI idea.',
      'Create the documentation needed to move from assessment into delivery.',
    ],
    outcomes: [
      {
        title: 'Clear maturity picture',
        body: 'Stakeholder interviews, surveys, and process review reveal how AI is currently understood and where the organization is blocked.',
      },
      {
        title: 'Roadmap with sequencing',
        body: 'You get a structured view of what to tackle first, what to postpone, and what capability gaps need to be addressed.',
      },
      {
        title: 'Faster implementation planning',
        body: 'The audit translates strategy into documented priorities, opportunity areas, and rollout logic your team can use immediately.',
      },
    ],
    process: [
      {
        phase: 'Level 1',
        title: 'Discovery and assessment',
        body: 'We conduct interviews, surveys, and workflow mapping to understand readiness, alignment, and current usage patterns.',
      },
      {
        phase: 'Level 2',
        title: 'Design and documentation',
        body: 'We turn findings into a maturity scorecard, priority list, and implementation roadmap oriented around measurable value.',
      },
      {
        phase: 'Level 3',
        title: 'Build and deploy',
        body: 'Where needed, the audit feeds directly into automation builds, workflow implementation, and team enablement.',
      },
    ],
    fit: [
      'Teams that need a baseline before making bigger AI investments',
      'Organizations struggling with scattered AI experiments',
      'Leaders who want a board-friendly roadmap and prioritization logic',
      'Companies preparing for broader AI implementation or staffing decisions',
    ],
    deliverables: [
      'AI maturity assessment',
      'Opportunity prioritization',
      '12-month roadmap',
      'Documentation for rollout planning',
    ],
    ctaTitle: 'Start with a sharper diagnosis.',
    ctaBody:
      'The audit helps you understand where you stand, where value is likely to emerge first, and what sequence will make the rest of the program easier.',
  },
  {
    slug: 'caio-leadership',
    navTitle: 'CAIO Leadership',
    title: 'Fractional CAIO Leadership',
    eyebrow: 'C-Level AI Strategy That Scales',
    summary:
      'Get stage-appropriate AI leadership now without committing to a full-time executive hire before the business is ready for it.',
    intro:
      'For many organizations, hiring a full-time AI executive too early is expensive and risky. Fractional CAIO leadership provides strategy, implementation oversight, executive alignment, and momentum while the company validates what the role should eventually become.',
    image: '/images/services/caio-leadership-hero.jpg',
    accent: 'mint',
    heroStats: [
      { label: 'Time To Start', value: 'As fast as 2 weeks' },
      { label: 'Leadership Scope', value: 'Executive + delivery' },
      { label: 'Goal', value: 'Stage-appropriate scale' },
    ],
    proofPoints: [
      'Avoid a premature $300K+ executive commitment before the operating model is proven.',
      'Get roadmap ownership, executive communication, and implementation pressure in one lane.',
      'Use the engagement to decide when a full-time AI leader actually makes sense.',
    ],
    outcomes: [
      {
        title: '90-day roadmap',
        body: 'Establish a focused set of priorities, align AI work with business goals, and prove traction early through visible quick wins.',
      },
      {
        title: 'Operational momentum',
        body: 'Deploy initial workflows, improve governance, and give AI initiatives a real owner who can coordinate across teams.',
      },
      {
        title: 'Scale planning',
        body: 'Build the foundations for a center-of-excellence model, future hiring decisions, and a more durable AI operating system.',
      },
    ],
    process: [
      {
        phase: 'Month 1',
        title: 'Foundation and quick wins',
        body: 'Complete the audit, shape the roadmap, deploy an early automation, and prepare leadership-ready communication around the initiative.',
      },
      {
        phase: 'Month 2 to 3',
        title: 'Build momentum',
        body: 'Expand into high-impact workflows, train the team, and stand up governance and measurement practices.',
      },
      {
        phase: 'Month 4 to 6',
        title: 'Scale and optimize',
        body: 'Define a more permanent AI operating model, prepare for future leadership hires, and broaden implementation coverage.',
      },
    ],
    fit: [
      'Companies with 50 to 1,000 employees that need AI leadership now',
      'Growth-stage businesses where every senior hire has to be timed carefully',
      'Organizations burned by earlier AI experiments or weak ownership',
      'Teams that want both executive strategy and operational pressure',
    ],
    deliverables: [
      'Executive AI roadmap',
      'Quick-win automation deployment',
      'Governance and measurement structure',
      'Future-state hiring and scaling plan',
    ],
    ctaTitle: 'Add the leadership layer before you over-hire.',
    ctaBody:
      'Fractional CAIO leadership gives you real ownership and execution pressure while preserving flexibility about what the permanent org should look like later.',
  },
  {
    slug: 'global-staffing',
    navTitle: 'Global Staffing',
    title: 'Global Staffing',
    eyebrow: 'AI-Empowered Teams From Vietnam',
    summary:
      'Find, train, and scale with AI-empowered professionals who integrate into your workflows and extend your team’s operating capacity.',
    intro:
      'Global staffing is not just about lower-cost labor. The right model gives you capable operators, analysts, and builders who can work with AI-native systems and accelerate delivery without introducing chaos into your process.',
    image: '/images/services/global-staffing-hero.jpg',
    accent: 'blue',
    heroStats: [
      { label: 'Talent Market', value: 'Vietnam' },
      { label: 'Roles', value: 'Builders + operators' },
      { label: 'Focus', value: 'Embedded delivery' },
    ],
    proofPoints: [
      'Access AI-trained professionals instead of generic offshore staffing.',
      'Embed people directly into existing workflows and systems.',
      'Scale execution capacity while maintaining speed and quality.',
    ],
    outcomes: [
      {
        title: 'Smarter capacity expansion',
        body: 'Bring in technical and operational talent that can contribute to AI-enabled workflows from the start.',
      },
      {
        title: 'Embedded team model',
        body: 'The staffing model is designed to integrate with your team, not operate as a disconnected vendor layer.',
      },
      {
        title: 'Faster implementation support',
        body: 'Use the team to accelerate automation, operations, data work, and system coordination around your AI initiatives.',
      },
    ],
    process: [
      {
        phase: 'Step 1',
        title: 'Role definition',
        body: 'We define the right blend of skills, ownership, and communication cadence for the work you actually need to move.',
      },
      {
        phase: 'Step 2',
        title: 'Matching and vetting',
        body: 'Candidates are filtered for capability, fit, and AI fluency so they can work inside modern, tool-assisted workflows.',
      },
      {
        phase: 'Step 3',
        title: 'Embed and scale',
        body: 'We help your new team members integrate into your operating rhythm and expand the model as you gain confidence.',
      },
    ],
    fit: [
      'Companies that need more delivery capacity without bloating local headcount',
      'Teams building AI-powered workflows and operations',
      'Organizations that want a tighter model than traditional outsourcing',
      'Leaders looking for execution support across build and operations roles',
    ],
    deliverables: [
      'Role design and staffing plan',
      'Vetted candidate shortlist',
      'Embedded onboarding support',
      'Scale-up path for future roles',
    ],
    ctaTitle: 'Build a stronger execution bench.',
    ctaBody:
      'Use AI-empowered global talent to increase throughput, support implementation work, and create a more durable operating team.',
  },
  {
    slug: 'training-and-certification',
    navTitle: 'Training & Certification',
    title: 'Training & Certification',
    eyebrow: 'AI Literacy For Teams And Operators',
    summary:
      'Equip your team with the frameworks, operating language, and practical confidence needed to implement AI responsibly and effectively.',
    intro:
      'Training matters because tools alone do not change behavior. This offer is built to improve AI literacy across leadership and delivery teams so adoption becomes more useful, more repeatable, and easier to scale.',
    image: '/images/services/training-hero.jpg',
    accent: 'gold',
    heroStats: [
      { label: 'Audience', value: 'Teams + leaders' },
      { label: 'Focus', value: 'Practical capability' },
      { label: 'Format', value: 'Workshops + certification' },
    ],
    proofPoints: [
      'Move teams beyond passive AI curiosity into practical application.',
      'Create shared frameworks for prompting, workflows, governance, and rollout.',
      'Support leadership readiness and operator confidence at the same time.',
    ],
    outcomes: [
      {
        title: 'Higher AI literacy',
        body: 'Teams understand the concepts, workflows, and tradeoffs needed to use AI well in real operating environments.',
      },
      {
        title: 'Leadership readiness',
        body: 'Managers and executives gain language and structure for guiding adoption, prioritizing opportunities, and setting expectations.',
      },
      {
        title: 'Stronger internal adoption',
        body: 'Training reduces fear and confusion, helping AI become a more normal part of how work gets done.',
      },
    ],
    process: [
      {
        phase: 'Step 1',
        title: 'Audience design',
        body: 'We tailor the curriculum around who needs training, what level they are at, and what business outcomes matter most.',
      },
      {
        phase: 'Step 2',
        title: 'Hands-on instruction',
        body: 'Sessions combine concept framing with applied examples so teams can connect AI directly to their day-to-day work.',
      },
      {
        phase: 'Step 3',
        title: 'Certification and reinforcement',
        body: 'Participants leave with clearer frameworks, practical examples, and an ongoing reference point for continued growth.',
      },
    ],
    fit: [
      'Organizations that want broader AI capability across the team',
      'Leaders preparing departments for AI-enabled work',
      'Companies that need a stronger internal change-management layer',
      'Businesses pairing training with audits, staffing, or workflow implementation',
    ],
    deliverables: [
      'Tailored training path',
      'Hands-on workshop materials',
      'Certification support',
      'Post-training implementation guidance',
    ],
    ctaTitle: 'Train the team that has to operate the system.',
    ctaBody:
      'Better literacy produces better judgment, better adoption, and stronger results across every other AI investment you make.',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
