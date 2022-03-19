import Image from "next/image";
export default function Category() {
  return (
    <>
      <div className="category">
        <div>
          <Image alt="" src="/cat1.webp" layout="fill" />
          <div>
            <p>women`s</p>
          </div>
        </div>
        <div>
          <Image alt="" src="/cat2.webp" layout="fill" />
          <div>
            <p>accessories</p>
          </div>
        </div>
        <div>
          <Image alt="" src="/cat4.webp" layout="fill" />
          <div>
            <p>men`s</p>
          </div>
        </div>
      </div>
    </>
  );
}
