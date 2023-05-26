"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();
	return (
		<div onClick={() => router.replace("/")} className="text-4xl font-bold cursor-pointer">
			Logo
		</div>
	);
};

export default Logo;
