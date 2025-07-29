## Process

You can enter your location and destination. Minecraft uses three digits of precision in X and Z coordinates.

The checkboxes convert [Overworld](https://minecraft.wiki/w/Overworld) coordinates to [the Nether](https://minecraft.wiki/w/The_Nether) coordinates.

## Related Info

[Rotation](https://minecraft.wiki/w/Rotation): It talks about yaw, pitch, and roll.

[Basic Information](https://minecraft.wiki/w/Chunk_format/Entity/Rotation_(yaw)): Mentions which angle corresponds to what cardinal direction

[Debug Screen](https://minecraft.wiki/w/Debug_screen#Left_side): The most important link here. Mentions the specific formatting. Check the section titled "Left Side". Press Ctrl+F to find XYZ and Yaw under the "Facing" line.

[A Wikipedia article on Yaw](https://en.wikipedia.org/wiki/Yaw_(rotation))

![A circular diagram showing yaw angles in degrees mapped to clock positions, with labelled cardinal directions (North, South, East, West) and axis notations (+X, -X, +Z, -Z).](https://github.com/FlyingSaturn/yawcalc/raw/refs/heads/main/yaw-angles.svg)

The above image is under the public domain (CC0 license)**. If the image doesn't render, then you can visit here: https://commons.m.wikimedia.org/w/index.php?title=File:Yaw_Angles_in_Minecraft.svg

"Digging along" probably won't be right... However, programmers have a reputation for using incorrect grammar.

If you check out the wiki on the Debug Screen (you get the debug screen by pressing F3), you'll see that, along with yaw, there's also an angle called pitch. It shows precisely where you're looking between up and down.

The weird thing about the coordinate system conventions followed by Minecraft is that both South (yaw) and Up (pitch) are represented using positive angles, which isn't the case in other disciplines. If you look straight towards the horizon, then your Pitch angle is "-0.0". If you are looking directly up or North, then it's negative (or the highest value, i.e., 180.0).

## About

Just a normal slope calculator which calculates two Minecraft coordinates. One has only to enter the X and Z coords for this to work. 

Used Maven and Spring Boot for this.

I really should thank the coding folks on the Bentovid and the Wintrcat Discord servers for making my static code better. Tbh, it would've been a nightmare without their contributions.

I wanted it to be a Minecraft plugin, but it wasn't successful, since we play on Aternos and that hosting service only accepts the plugins which have gained a bit of popularity. Therefore, I lost all motivation. I had the Java method with me, though, so I thought of making a Spring Boot application based on that.

Regardless, [please check out its GitHub repo](https://github.com/FlyingSaturn/yaw-calculator). Also, [please check out the Spring Boot version of this website](https://github.com/FlyingSaturn/yawcalc-web).



## Future Plans

- Just give a tutorial on yaw angles and tell the people why it's essential. Proper formatting (exactly like Minecraft) will work too. (Formatting part done, writing a section on Minecraft Wiki)
- those og meta tags
- A swap button (Done)
