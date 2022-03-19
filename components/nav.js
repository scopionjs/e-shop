import Link from "next/link";
export default function Nav() {
  return (
    <>
      <nav>
        <div>
          <div className="item">
            <Link href="/">
              <a>
                <h1>e-</h1>
              </a>
            </Link>
          </div>
          <div className="item">
            <input type="search" placeholder="search.." />
            <button>search</button>
          </div>
          <div className="item">
            <Link href="/">
              <a>home</a>
            </Link>
            <Link href="/">
              <a>contact</a>
            </Link>
            <div>
              <div>
                <button>cart</button>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
