import { GitHubLogo } from "./GitHubLogo";

export function Banner() {
  return (
    <a href="https://github.com/israelss/reactcron">
      <div className="grid justify-content-center transform bg-gray-300 fixed top-0 right-0 w-20 h-20 rounded-bl-full">
        <span className="m-auto mb-7 ml-7">
          <GitHubLogo />
        </span>
      </div>
    </a>
  );
}
