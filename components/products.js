import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <div className="products">
        <section>
          <p>New Arrivals</p>
          <div></div>
        </section>
        <div>
          <div className="btns">
            <button>all</button>
            <button>accessories</button>
            <button>men`s</button>
            <button>women`s</button>
          </div>
          <div className="items-wrapper">
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
            <div>
              <div>
                <Image layout="fill" alt="" src="/product.png" />
              </div>
              <Link href="/">
                <a>
                  <p>male boxers</p>
                </a>
              </Link>
              <p>$25,00</p>
              <button>add cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
