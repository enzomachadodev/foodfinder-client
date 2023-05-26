"use client";

interface AvatarProps {
	image: string;
	onClick: () => void;
}

const Avatar = ({ image, onClick }: AvatarProps) => {
	return (
		<div
			onClick={onClick}
			className="
                    h-[48px]
                    aspect-square
                    rounded-full
                    overflow-hidden
					hover:border-2
					border-indigo-500
					transition
					duration-200
					cursor-pointer
    "
		>
			<img
				src={image}
				alt=""
				className="
            w-full
            h-full
            object-cover
        "
			/>
		</div>
	);
};

export default Avatar;
