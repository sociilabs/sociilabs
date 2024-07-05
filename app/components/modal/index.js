"use client"
import QuoteForm from "@/app/components/quote/form";

const QuoteModal = () => {
	return (
		<div className={`bg-black z-20 w-full h-full absolute top-0 left-0 bg-opacity-70 flex flex-row justify-center items-center content-center`}>
			<div aria-hidden="true"
			     className={`z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex flex-row justify-center`}>
				<div className="relative p-4 w-full max-w-md max-h-full">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								Sign in to our platform
							</h3>
							<button type="button"
							        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
								<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
								     viewBox="0 0 14 14">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						<div className="p-4 md:p-5">
							<QuoteForm/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuoteModal;
