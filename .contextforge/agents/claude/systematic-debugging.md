## Systematic Debugging

Do not propose any fix before completing Phase 1 root cause investigation. Phase 1 is a hard gate: read the full error message and stack trace, reproduce the issue consistently, check what changed recently, instrument each layer boundary in multi-component systems to locate the exact failure point, and trace bad values backward through the call stack to their origin. Fix at source, not at symptom.

**Phases execute in order and cannot be skipped:** Root Cause → Pattern Analysis → Hypothesis Testing → Implementation (failing test case first, one fix, verify).

**The 3-strikes rule is absolute:** After 3 failed fix attempts, stop. Do not attempt Fix #4. The pattern of each fix surfacing a new problem in a different place is a signal of wrong architecture, not wrong implementation. Raise this with the user before proceeding.

**Catch these rationalizations and reject them:** "emergency, no time for process" (systematic is faster than thrashing), "issue seems simple" (simple bugs have root causes too), "multiple fixes at once saves time" (it doesn't — you can't isolate what worked).
