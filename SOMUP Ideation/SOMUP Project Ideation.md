## Area Of Interest
I'd like to do something with the practice of music visualisers, and create some kind of reactive music visualiser with customisable parameters. I think I would like to use Processing or P5.JS to achieve this, though i'm not sure if i'd like to use any kind of physical apparatus.
## Problem Space
Whilst doing some ideation using Copilot ([[2025-11-03]]), I asked for a selection of ideas relating to potential 'problem spaces'. Of these options, one idea I liked was the idea of an accessibility focused experience for those who may not be able to fully experience music as an audio-only experience, such as people who are deaf or hard of hearing. I feel it's an idea with a lot of potential direction, and could be a digital-only idea OR integrate tangible user interfaces. In order to give myself a specific launching point, I decided to boil this down:

> Create a music visualiser experience designed for augmenting the experience of listening to music for those who are deaf or hard of hearing, with the ability to customise the experience for different levels of deafness and/or hearing loss. Could also be adapted for TUI elements, such as vibrations.
#### Why does this matter?
> Obviously, as a purely/mostly audio based experience, music can be hard to enjoy when your hearing is impaired, be it minorly or majorly impaired. However, this does not stop people who have impaired hearing from continuing to enjoy music in a number of ways. In my previous university work i've dabbled in inclusive design, and think it would be fun to extend that and develop a project that can augment the music listening experience to make it more fun for those with impaired hearing, and include gamified elements whilst I do so.
> Ultimately, I have a few problems in mind i'd like to tackle:
- Music as an audio only experience
- How to communicate the 'feeling' of specific types of music in a visual/tactile experience. i.e: How do you translate what a certain genre sounds or feels like into visuals?
- Make a music listening experience that is fun for both the hearing impaired AND those who are not impaired, i.e for group listening/experience
## What other solutions exist?
1. ViTune
	https://dlsucomet.github.io/papers/vitune/
	https://dlsucomet.github.io/files/2020deja_vitune_chilbw.pdf
	ViTune is a music visualiser tool similar to the kind of thing I would like to make, designed to augment the listening experience of music with dynamic visuals that change along with the music. Designed with input from DHH individuals, the visualiser consists of different squares which increase in size along with the music. Particular care has been paid to make the visualiser engaging, avoiding design elements that supposedly increase boredom.
	- Digital, not peripheral based, which means less expense for the user 
2. Audiolux
	https://www.cymaspace.org/audiolux/
	https://www.cymaspace.org/projects/audiolux-one/
	https://github.com/CymaSpace/audiolux
	Audiolux is another project that aims to represent and augment the music listening experience through the use of visuals. In this instance, using Arduino and LED strips to map the sound spectrum on a spectrum of colour, creating a visual experience that can represent the 'experience' of listening to the music.
	- Some expense owing to it's nature as a physical project, but designed to be re-creatable.
	- Seems to lack room for customisation and adjustment to different experiences of DHH.
3. Music: Not Impossible
	https://www.notimpossible.com/projects/music-not-impossible
	I wanted to include at least one haptic-based project in my notes, as I was aware that some deaf and hard of hearing people enjoy 'listening' to music through the use of vibrations, such as feeling the vibrations through the floor in a room where music is playing loudly. This project consists of a series of wearable pieces, such as necklaces and anklets, which vibrate in time with different parts of the music, with visual LED feedback. The levels of vibration can be adjusted by the user.
	- The most expensive solution looked at, but I do think there is something to the 'haptic' approach that could be interesting to explore.
## Requirements
#### Personas
1. Not Hard Of Hearing
	- Least prioritised persona, can enjoy both the visual/haptic experience and the audio experience, but is not the target. 
	- Includes friends/family/bystanders who may be present when the project is in play
2.  Hard Of Hearing
	- Users with partial hearing loss, such as only in one ear or simply impaired hearing but not qualified as "profoundly deaf"
	- A primary target, though due to their amount of hearing the system will need to be adjustable for their sort of experience, as they will likely be able to hear the music as well.
3.  Profoundly Deaf
	- Users who are either completely deaf or have impaired enough hearing to be medically considered deaf.
	- One of the primary targets, as their level of hearing means they are the most excluded from an audio only experience.
Obviously, more specific research would need to be done into their personas and their specific wants/requirements.

#### General Requirements
As this is meant to be an accesible and inclusive project, i'd like to try and focus on usability and reducing the amount of effort required to interact with whatever artefact I create.
- Will need to narrow in on a specific 'look' for the visualiser and nail down how it will work and how the interactions will take place, what kind of UI will be needed, etc.
- Need to decide how the music will be fed in, either through some kind of file submission or actively played into the project. (Could also play tracks through a DAW, such as logic pro or other alternatives

- Decide between digital only/physical project (sensors, haptic feedback, etc.)
- Decide on demographic (all ages, kids, etc? leaning towards all ages)
- Plan considerations/areas to research (how DHH users interact with technology, etc.)
