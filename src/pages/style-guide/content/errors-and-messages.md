---
title: Errors and messages | Commerce Admin Development
description: Learn how to write custom errors messages and UI text that users see in the Adobe Commerce and Magento Open Source Admin application.
---

# Errors and messages

The application uses different types of dynamic messaging to alert users when:

*  An error has occurred and blocks them from completing a task.

*  Users need to know important information before continuing a task.

## Types of errors and messages

*  **Informational**: This messaging is not an error. It is used when a person can continue with the task but needs to be alerted about information necessary to complete the task.

*  **Recoverable error**: This is used when a person is blocked and can only continue by taking an action to fix the problem.

*  **Not recoverable/catastrophic error**: Used when a person cannot complete the task. Usually, it is due to a system error: the server is down, etc. Ideally, include a method to fix the issue or provide a contact for resolution. If a method or contact is available, provide guidance for the user to try again at a later time.

## How to write error content

Use complete sentences and brief, exact, but conversational language.

*  Avoid pleading or personal pronouns. For example: "you, "please", or "sorry".

*  Specify what went wrong.

*  Tell users how to fix the problem and continue the current task. If the problem cannot be resolved online, give users appropriate workaround options or support information.

### Tone and language

Do not blame the user or indicate that the user made a mistake.

*Example:*

*  No – “You did not enter your email address. Enter your email address and click 'Continue'."
*  Yes – “An email address is required. Enter your email address and click 'Continue'.”
