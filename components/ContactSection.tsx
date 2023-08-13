import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const ContactSection = () => {
	return (
		<section id="contact">
			<div className=" my-12 pb-12 md:pt-16 md:pb-48">
				<h1 className="my-10 text-center font-bold text-4xl">
					Contact Me
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>
				<div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
					<div className="flex flex-col md:flex-row items-center justify-center space-x-2 mb-1 md:space-x-4">
						<a
							href="https://github.com/jasonsonthanhngo"
							rel="noreferrer"
							target="_blank">
							<AiOutlineGithub
								className="hover:-translate-y-5 transition-transform cursor-pointer text-teal-500 dark:text-teal-100"
								size={500}
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/jasonsonthanhngo/"
							rel="noreferrer"
							target="_blank">
							<AiOutlineLinkedin
								className="hover:-translate-y-5 transition-transform cursor-pointer text-teal-500 dark:text-teal-100"
								size={500}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
