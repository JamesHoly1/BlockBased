import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center justify-between w-full h-14 rounded-sm p-4 ">
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
            <div className="flex justify-center items-center">
                <a
                className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto text-gray-100 bg-gray-50/5"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Follow on <span>
                    <Image
                        className=""
                        src="/xlogo.svg"
                        alt="x logo"
                        width={14}
                        height={14}
                        priority
                    />
                </span>
                </a>
            </div>
        </div>
    );
}