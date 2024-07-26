const Service = ({ title, image, children }) => {

    return <div className="p-2 md:p-4 mb-2 md:mb-4">

        <div className="md:flex container mx-auto border-cyan border-l-4">

            <div className="flex flex-col justify-center items-center basis-1/4">
                <div className="bg-gray size-24 drop-shadow-repl-cyan">{image}</div>
                <h3 className="p-4 font-press text-center">{title}</h3>
            </div>

            <div className="basis-3/4 p-4 md:p-4">
                <p className="font-sans text-lg">{children}</p>
            </div>

        </div>

    </div>
};

export { Service };
