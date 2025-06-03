import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center justify-center w-full h-14 rounded-sm p-4 ">
            <div className="flex justify-center items-center gap-2 ">
                <Image
                    className=""
                    src="/blockbasedicon.svg"
                    alt="BlockBased logo"
                    width={50}
                    height={50}
                    priority
                />
            </div>
        </div>
    );
}