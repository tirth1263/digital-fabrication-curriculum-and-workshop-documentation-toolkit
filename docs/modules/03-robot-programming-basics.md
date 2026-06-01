# Module 03: Robot Programming Basics

## Purpose

Introduce robot programming concepts at a conceptual level so participants can read, discuss, and safely review motion plans with instructors or technicians.

## Duration

90-120 minutes

## Learning outcomes

Participants will be able to:

- Explain the difference between joint motion and linear motion.
- Identify frames, tool center point, speed, acceleration, and approach moves.
- Read a simplified motion sequence.
- Explain why dry runs and simulation checks are required.

## Required materials

- Robot controller screenshots or offline programming screenshots
- Simplified pseudo-program
- Robot cell safety checklist
- Dry-run observation sheet

## Example pseudo-program

```text
SET TOOL extrusion_nozzle
SET FRAME worktable_origin
MOVE_J home_safe
MOVE_L approach_point SPEED 100
START_PROCESS
MOVE_L path_point_01 SPEED 40
MOVE_L path_point_02 SPEED 40
MOVE_L path_point_03 SPEED 40
STOP_PROCESS
MOVE_L retract_point SPEED 100
MOVE_J home_safe
```

## Discussion questions

- Where is the highest-risk motion?
- Which move should be slowed for first testing?
- Which points require clearance from fixtures?
- What should be visible during a dry run?

## Deliverable

Participants annotate a motion sequence with risk notes and verification steps.

