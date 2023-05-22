interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return <div className="container mx-auto p-4 border border-red-500">{children}</div>;
};

export default Container;
