const Divider = () => {
    return <div className="relative h-4 mb-4">
        <div className="absolute bg-gray w-3/6 top-1.5 right-0 h-2 animate-increase"></div>
        <div className="absolute bg-cyan w-4/6 top-0 left-0  h-2 animate-increase"></div>
    </div>
};

export { Divider };
