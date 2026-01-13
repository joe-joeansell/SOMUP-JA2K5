# Sound and Music Programming Proposal Form
- Your name: Joe Ansell | UP2247164
- Your project title: SightGroove - Inclusive music visualiser app for communicating mood to Deaf/Hard of hearing users.
- Planned AI collaboration tools (e.g. ChatGPT, GitHub Copilot, etc.): Use of LLMs for purposes of ideation, code generation, debugging and review. May make use of neural net frameworks to create parts of the functionality (Classifier models that can detect different instruments, etc.)
# Describe the theme or key idea behind your project 
Explain your creative vision and technical goals here. 
- Music visualiser experience with a focus on accessibility for deaf and hard of hearing people.
- Aims to "augment" the experience of listening to music with a visualiser designed to communicate both technical information (volume, instruments, etc.) and the 'feeling' of the music (what emotions and moods the music evokes and with what elements), with a focus on the 'feeling'
- Somewhat customisable depending on level of hearing loss/what the user wants out of the experience 
- Music visualiser focused on augmenting the music experience for hard of hearing people, with a focus on conveying mood and feelings and genre, etc in music. Flesh out later
### Two Potential Paths
- Existing metadata: Project in which users can submit any music file they like, and the software pays attention to certain metadata within the file to control the visualiser. For example, a song with a lower tempo or bpm might be a sadder or more melancholic song, and a song with a high tempo or bpm might exciting and happy. Or, for example: a song with a lot of electric guitar might be an 'angry' song, and a song with a lot of brass instruments might be a calm and happy song.
- Specific song catered project: Rather than allowing users to use any song they like, the project might be tailored to use a specific selection of songs, with each song being specifically accounted for with a uniquely tailored experience, and metadata that will direct the visuals displayed on screen. In this format, I would develop my own 'key' of emotions and associated colours (I.E: Yellow for happy, triumphant moments, blue for sadness, red for anger or aggression, pink for calmness, etc.) that would display at different parts of the song, with the colours sometimes melding together depending on the current emotions.
# Project research and AI collaboration strategy 
Discuss examples of current or historic related projects and explain how you plan to strategically collaborate with AI tools during development. 
#### Related Projects
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
3. EMMA- Emotion to Music Mapping Atlas database
	https://pubmed.ncbi.nlm.nih.gov/38286947/
	https://musemap-tools.uibk.ac.at/emma/
	 EMMA, or the Emotion to Music Mapping Atlas, is a database created by the University of Innsbruck that maps different songs onto an emotional scale, known as the Geneva Emotion Music Scale (GEMS). There are 9 different categories: Joy, Peacefulness, Tenderness, Nostalgia, Transcendence, Wonder, Sadness, Tension and Power. These all cover a range of emotions and 'moods' that music may communicate, such as happiness, anger, romance, or sadness. May be very useful to look at as a prior resource for quantifying emotion in music and trying to communicate this visually, as each category is colour coded also.
##### How will you maintain creative control while leveraging AI capabilities? 
I intend to act as the final say. Much as a project manager would, I do not intend to take an AI's suggestion as the final note, without doing my due dilligence of verifying it's input myself. For example, when ideating for this proposal I would ask for AI's input and receive a variety of suggestions, but then elaborated upon that input and chose a particular solution myself. I plan to continue to try and use AI tools in my ideation process, and through the development process I intend to maintain creative direction, such as guiding the visual design of the project, but I do intend to try and use AI tools, such as LLMs, to help debug and develop the functional elements of my code.
## Proposed sources 
Note: please use APA referencing as standard. Include sources on both technical audio programming concepts and AI collaboration approaches where relevant. 
- Figure out some logistics of creating this visualiser (how to quantify the emotional stuff, instruments, volume, etc.) and put here as sources
# Project development plan 
Explain how your project will work from a user's perspective and outline your approach to balancing independent work with AI collaboration. 
## What do you anticipate users to hear? 
As a project designed around deaf/hard of hearing users, the project has to account for the fact that some users won't hear anything at all. For users that can hear, however: The project is mainly focuses around augmenting existing audio which is fed into the program, rather than having sound which is synthesised and created by the software itself. For those users that can hear, the intent of the project is mainly to be a musical experience.
## How will users interact with your software? 
Software will work somewhat like a music player, with users able to input audio files into the software to then be played as a visualiser. Computer based interface, with the intent being to create clear, intuitive UI for use in the software.
- Background and foreground elements, colour and visual elements (For example, different shapes that appear/disappear or change shape/size) of background will change along with the mood of music. Foreground visualiser elements will change with more technical elements (volume, bass, tempo, etc.)
- Clearly labelled buttons and sliders
- May include a 'key' of sorts so that users can know which colours correspond to which moods
## What unique features does your software offer them? 
For deaf/hard of hearing audiences, my intent with this project is to try and provide them with the things that might be lost in the experience of music- an audio oriented experience- when your hearing is either partially or fully impaired. Because music does have a tangible effect on the world (in that sound exists in the form of vibrations), people with hearing issues can experience music in a form by feeling the vibrations of music in the space of a room. The aim of this project is to communicate elements of the music experience that might be lost, through real-time generated visuals. The instruments, the tempo, the mood and the feeling of a piece of music- This is the kind of information i'd like the project to communicate.
## How will you approach AI collaboration during development? 
Describe your planned strategy for using AI tools while ensuring you maintain deep understanding of the technical concepts. 
- Human-controlled ideation with LLMs: Using the AI to generate shortlists of initial ideas and sometimes to elaborate on those ideas, then using my discretion to choose ideas that I like and expand upon what the AI suggests.
- Code generation and debugging through use of LLMs, with consistent human review and refinement
- May use LLMs for help with self-review, feedback, and summarisation of notes and progress reviews
# Technical specifications 
## Input sources you will be using 
- Fed-in audio files, which will be read by the program and translated into realtime visuals (Most likely will be MP3s, but may include MIDIs and other file formats). May be a specific selection of files which the visualiser is designed to work with, rather than any file the user chooses to submit.
- File metadata, existing information within the audio files that is extracted out
- Created metadata which applies to a song and controls the timing and intensity of visuals, sort of like a visual soundtrack that is created for it (by me)
- On-screen GUI (Volume control, audio source change, different modes of display)
- I don't currently plan to use any form of TUI or phone-based control, but this could change.
## Output sources you will be using 
- Audio output exists in the form of live playback of any supplied MP3s/MIDIs/etc. Users will be able to control the volume and perhaps the speed of the playback.
- As a visualiser, musical information will be displayed on screen in visual form. Either will be displayed on a computer monitor or could be projected onto a wall or other space.
- May also output something like a text transcript of the visualiser for control purposes
## Real-time control methods 
- Visualiser and interface methods controlled and developed using p5.js / processing
- May make use of SuperCollider and OSC to control the data taken from the music and translate into Processing
- May use JSON files to cue certain things in the visualiser, for example there might be a file which calls upon the visualiser to display 'happy' colours for a certain portion of time as the song plays
- Possibly figure out a way to use processing to control play/pause/loop/rewind/fast forward etc.
# Assessment preparation 
Briefly outline: 
- **How you will document your AI collaboration process**: 
- Keep track of prompts I give and AI responses inside of markdown documents via obsidian, archiving as I go so I don't have to scramble to find them later. May include summaries of the day's notes and progress written by me or the LLM.
- **What aspects of your project you expect to demonstrate in the viva voce:
- In the viva, I aim to demonstrate my project in use, and perform an active demo of at least one song working with the visualiser software I have created. If I have managed to implement multiple songs, I will demonstrate some of those as well. I will also aim to demonstrate some of the more technical elements, such as my code, and the metadata that dictates the visual forms the visualiser produces.
- **Any potential challenges you anticipate in explaining your technical implementation:
- I anticipate that, if my plan is to use AI-assisted code in my production of this artefact, that I do run the risk of having an end product where I cannot properly explain all aspects of what I have produced. In order to combat this, I will be sure to verify and polish the code myself, rather than just implementing it blindly. I will also be sure to ask the LLM for clarification or explanation of any code snippets I do not understand the functionality of.

