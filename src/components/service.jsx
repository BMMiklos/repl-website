const Service = ({ title, image, children }) => {
    
    return <div className="p-2 md:p-4 bg-dark-gray transition-all hover:bg-white text-white hover:text-gray">

        <div className="p-2 md:flex container mx-auto border-cyan">

            <div className="flex flex-col justify-center items-center basis-1/4">
                <div className="bg-gray size-24">{image}</div>
                <h3 className="p-4 font-bold font-sans text-center">{title}</h3>
            </div>

            <div className="basis-3/4 p-4 md:p-4">
                <p className="font-sans text-lg">{children}</p>
            </div>

        </div>

    </div>
};

export { Service };
