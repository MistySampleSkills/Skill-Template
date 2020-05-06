# Skill-Template
Each repository in [MistySampleSkills](https://github.com/MistySampleSkills) is an individual skill for Misty. This repository is a template for creating and contributing your own skills.

## Misty's Skills

A skill is an application you develop for the Misty platform. You can write skills for Misty using her REST API or her on-robot JavaScript API. This template shows the file structure for skills that run locally on Misty and use her on-robot JavaScript API. For more about skills, see [Introduction to Skills](https://docs.mistyrobotics.com/docs/skills/introduction/) in the documentation.

At their most most basic, on-robot skills require two files:
* a .js code file with the code to execute in the skill
* a .json meta file with information that enables Misty to understand what the skill does and how to execute the code

### Uploading a Skill

To upload a skill to your robot, compress the code and meta files into a .zip archive. Upload the compressed file to Misty using her [REST API](https://docs.mistyrobotics.com/docs/reference/rest/#saveskilltorobot).

### Assets

Some skills use image or audio assets that a user will need to upload to Misty before executing the skill. You can make these files available by placing them in your skill's repository, at the same directory level as your code and meta files.

### Code for Other Devices

Misty's skills can interact with code that executes on an Arduino, in your web browser, on a Raspberry Pi, or from other kinds of external devices. Consider including _all_ of this code in the repository for a skill. 

### Writing your README

It's good practice to include a README.md in the top level directory of a skill repository. The README.md for a skill might include a description of the skill, instructions on how to use the files in the repository, and any other information a user needs to know about using or contributing to the skill. This **Skill-Template** repository includes the following:
* **skill-template.js** - The code file for the skill-template sample skill.
* **skill-template.json** - The meta file for the skill-template sample skill.
* **skill-template.zip** - A .zip archive with the code and meta files for the skill-template sample skill. Upload this file to Misty to run the skill-template skill on your robot.
* **LICENSE** - License information for the files in this repository.
* **README.md** - Information about using this skill and contributing to this repository.

### Docs & Community

Check out [Misty's documentation](https://docs.mistyrobotics.com/) for more information about developing skills. And be sure to join the [Misty Community](https://community.mistyrobotics.com/) for discussions about Misty skill development and robotics in general!

***Note:** Skills contributed to [MistySampleSkills](https://github.com/MistySampleSkills)  by members of the Misty Robotics organization use the [Apache License](http://www.apache.org/licenses/LICENSE-2.0), but we encourage you to choose your own license for the skills that you create.*

---

**WARRANTY DISCLAIMER.**

* General. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MISTY ROBOTICS PROVIDES THIS SAMPLE SOFTWARE “AS-IS” AND DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. MISTY ROBOTICS DOES NOT GUARANTEE ANY SPECIFIC RESULTS FROM THE USE OF THIS SAMPLE SOFTWARE. MISTY ROBOTICS MAKES NO WARRANTY THAT THIS SAMPLE SOFTWARE WILL BE UNINTERRUPTED, FREE OF VIRUSES OR OTHER HARMFUL CODE, TIMELY, SECURE, OR ERROR-FREE.
* Use at Your Own Risk. YOU USE THIS SAMPLE SOFTWARE AND THE PRODUCT AT YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR (AND MISTY ROBOTICS DISCLAIMS) ANY AND ALL LOSS, LIABILITY, OR DAMAGES, INCLUDING TO ANY HOME, PERSONAL ITEMS, PRODUCT, OTHER PERIPHERALS CONNECTED TO THE PRODUCT, COMPUTER, AND MOBILE DEVICE, RESULTING FROM YOUR USE OF THIS SAMPLE SOFTWARE OR PRODUCT.

Please refer to the Misty Robotics End User License Agreement for further information and full details: https://www.mistyrobotics.com/legal/end-user-license-agreement/

--- 

*Copyright 2020 Misty Robotics*<br>
*Licensed under the Apache License, Version 2.0*<br>
*http://www.apache.org/licenses/LICENSE-2.0*

