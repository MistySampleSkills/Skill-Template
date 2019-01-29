/*
*    Copyright 2019 Misty Robotics, Inc.

*    Licensed under the Apache License, Version 2.0 (the "License");
*    you may not use this file except in compliance with the License.
*    You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*    Unless required by applicable law or agreed to in writing, software
*    distributed under the License is distributed on an "AS IS" BASIS,
*    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
implied.
*    See the License for the specific language governing permissions and
*    limitations under the License.
*/

// Print a debug message
misty.Debug("Hello, world!")
// Change Misty's chest LED to green
misty.ChangeLED(0, 255, 0);
// Pause for one second
misty.Pause(1000);
// Change Misty's LED to red
misty.ChangeLED(255, 0, 0);