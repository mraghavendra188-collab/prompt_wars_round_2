export const TIMELINE_STEPS = [
  { id: '1', title: 'Voter Registration Opens', description: 'Register to vote early.', status: 'done', badge: '1' },
  { id: '2', title: 'Registration Deadline', description: 'Last day to register.', status: 'upcoming', badge: '2' },
  { id: '3', title: 'Early Voting Begins', description: 'Cast your ballot early.', status: 'upcoming', badge: '3' },
  { id: '4', title: 'Mail Ballot Deadline', description: 'Request mail ballot.', status: 'future', badge: '4' },
  { id: '5', title: 'Election Day', description: 'Go vote at your polling place!', status: 'future', badge: '5' },
  { id: '6', title: 'Vote Count', description: 'Results are certified.', status: 'future', badge: '6' }
];

export const VOTING_STEPS = [
  { id: 'vs-1', title: 'Check eligibility', description: 'Ensure you meet criteria.', status: 'future', badge: '1' },
  { id: 'vs-2', title: 'Register', description: 'Register before deadline.', status: 'future', badge: '2' },
  { id: 'vs-3', title: 'Receive voter card', description: 'Check your mail.', status: 'future', badge: '3' },
  { id: 'vs-4', title: 'Choose method', description: 'Early or mail or day-of.', status: 'future', badge: '4' },
  { id: 'vs-5', title: 'Research candidates', description: 'Read up on issues.', status: 'future', badge: '5' },
  { id: 'vs-6', title: 'Cast ballot', description: 'Vote securely.', status: 'future', badge: '6' },
  { id: 'vs-7', title: 'Verify vote', description: 'Check if it was counted.', status: 'future', badge: '7' }
];

export const FAQ_ITEMS = [
  { id: 'faq-1', question: "Who can vote?", answer: "Usually citizens over 18 who meet state residency requirements." },
  { id: 'faq-2', question: "What is the Electoral College?", answer: "System used to elect fully the US President." },
  { id: 'faq-3', question: "Can I vote by mail?", answer: "Depends on state rules but usually yes with an absentee request." },
  { id: 'faq-4', question: "What ID do I need?", answer: "Check local requirements, many states require photo ID." },
  { id: 'faq-5', question: "Primary vs general election?", answer: "Primary selects party candidates, General elects officials." },
  { id: 'faq-6', question: "How are votes counted?", answer: "Via optical scanners and hand counts conducted by bipartisan local boards." }
];

export const GLOSSARY_TERMS = [
  { id: 'g-1', term: "Absentee Ballot", def: "A vote cast by someone who is unable to attend the official polling station." },
  { id: 'g-2', term: "Ballot", def: "A process of voting, in writing and typically in secret." },
  { id: 'g-3', term: "Canvass", def: "The official tally of votes for any given election." },
  { id: 'g-4', term: "Down-Ballot", def: "Contests listed below the main races (like President or Governor)." },
  { id: 'g-5', term: "Electoral College", def: "A body of electors established by the US Constitution." },
  { id: 'g-6', term: "General Election", def: "A regular election of candidates for office." },
  { id: 'g-7', term: "Incumbent", def: "The current holder of an office or post." },
  { id: 'g-8', term: "Primary Election", def: "Election to select candidates for a principal election." },
  { id: 'g-9', term: "Polling Place", def: "A building where voting takes place during an election." },
  { id: 'g-10', term: "Provisional Ballot", def: "Used to record a vote when there are questions about a voter's eligibility." },
  { id: 'g-11', term: "Runoff Election", def: "A further election held when the first did not result in a clear winner." },
  { id: 'g-12', term: "Swing State", def: "A US state where the two major political parties have similar levels of support." }
];
