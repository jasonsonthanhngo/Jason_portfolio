import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
	{
		name: 'Thread App',
		description:
			'A social media app that built with Nextjs to connect you with friends seamlessly and joyfully.',
		image: '/thread_homepage.PNG',
		github: 'https://github.com/jasonsonthanhngo/threads_app',
		link: 'https://threads-app-xi.vercel.app/',
	},
	{
		name: 'Companion AI',
		description:
			'An application crafted with Next.js and powered by OpenAI API. Shape personalized chatbots by infusing personas of favorites. Train and seed AI companions seamlessly for lifelike interactions!',
		image: '/Companion-AI-Homepage.png',
		github: 'https://github.com/jasonsonthanhngo/ai-companion',
		link: 'https://jason-ai-companion.vercel.app/',
	},
	{
		name: 'AI Image Generator App',
		description:
			"Let's make art together! Simply provide a prompt, and watch the magic unfold as the AI brings your ideas to life. Powered by OpenAI's GPT-3.5-turbo, built with React, Node.js, MongoDB, and Cloudinary.",
		image: '/AI_Homepage.PNG',
		github: 'https://github.com/jasonsonthanhngo/AI_Image_Generator',
		link: 'https://jasonsonthanhngo.github.io/AI_Image_Generator/',
	},
	{
		name: 'Chatbot App',
		description:
			"A chatbot app powered by OpenAI's GPT-3.5-turbo model. Built with React and Node.js to offer dynamic and intelligent conversations with a user-friendly AI bot.",
		image: '/AiChat.PNG',
		github: 'https://github.com/jasonsonthanhngo/chatGPT-bot',
		link: 'https://github.com/jasonsonthanhngo/chatGPT-bot',
	},
	{
		name: 'Expense Tracker',
		description:
			'A Node.js and React-based web app to manage personal finances efficiently.',
		image: '/expense_Dashboard.PNG',
		github: 'https://github.com/jasonsonthanhngo/expenses-tracker',
		link: 'https://github.com/jasonsonthanhngo/expenses-tracker',
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
			</h1>

			<div className="flex flex-col space-y-28">
				{projects.map((project, idx) => {
					return (
						<div key={idx}>
							<SlideUp offset="-300px 0px -300px 0px">
								<div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={project.link}>
											<Image
												src={project.image}
												alt=""
												width={1000}
												height={1000}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className="mt-8 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{project.description}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link
												href={project.github}
												target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link
												href={project.link}
												target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
