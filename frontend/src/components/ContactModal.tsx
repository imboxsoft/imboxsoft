type ChildProps = {
    handleClickOnContactModal: (
        event: React.MouseEvent<HTMLButtonElement>
    ) => void;
};

const ContactModal: React.FC<ChildProps> = ({ handleClickOnContactModal }) => {
    return (
        <div
            tabIndex={-1}
            aria-hidden="true"
            className="bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden h-screen fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full"
        >
            <div className="relative p-4 w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Contact Us
                        </h3>
                        <button
                            onClick={handleClickOnContactModal}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4">Content</div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
