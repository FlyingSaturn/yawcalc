## Process

You can enter your location and destination. Minecraft uses three digits of precision in X and Z coordinates.

The checkboxes convert [Overworld](https://minecraft.fandom.com/wiki/Overworld) coordinates to [the Nether](https://minecraft.wiki/w/The_Nether) coordinates.

## Related Info

[Rotation](https://minecraft.wiki/w/Rotation)

[Basic Information](https://minecraft.wiki/w/Chunk_format/Entity/Rotation_(yaw))

[Debug Screen, Left Side. Ctrl+F to find XYZ and Yaw (the most important link here)](https://minecraft.wiki/w/Debug_screen#Left_side)

[A Wikipedia article on Yaw](https://en.wikipedia.org/wiki/Yaw_(rotation))

![image](https://github.com/user-attachments/assets/5b10c90e-f3b2-4160-9817-a7dbf32f18f7)

"Digging along" probably won't be right... However, programmers have a reputation for using incorrect grammar.

If you check out the wiki on the Debug Screen (you get the debug screen by pressing F3), you'll see that, along with yaw, there's also an angle called pitch. It shows precisely where you're looking between up and down.

The weird thing about the coordinate system conventions followed by Minecraft is that both South (yaw) and Up (pitch) are represented using positive angles, which isn't the case in other disciplines. If you look straight towards the horizon, then your Pitch angle is "-0.0". If you are looking directly up or North, then it's negative (or the highest value, i.e., 180.0).

## About

Just a normal slope calculator which calculates two Minecraft coordinates. One has only to enter the X and Z coords for this to work. 

Used Maven and Spring Boot for this.

I really should thank the coding folks on the Bentovid and the Wintrcat Discord servers for making my static code better. Tbh, it would've been a nightmare without their contributions.

I wanted it to be a Minecraft plugin, but it wasn't successful, since we play on Aternos and that hosting service only accepts the plugins which have gained a bit of popularity. Therefore, I lost all motivation. I had the Java method with me though, so I thought of making a Spring Boot application based on that.

Regardless, [please check out at its GitHub repo](https://github.com/FlyingSaturn/yaw-calculator).

## Future Plans

- Just give a tutorial on yaw angles and tell the people why it's essential.
- those og meta tags... 
