import { blogData } from "@/src/containers/blogs/data";

export default function CreatingSection() {
  const posts = blogData;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-[410px] mt-10 mb-10">
      <h2 className="font-medium text-lg leading-[100%] tracking-[0px] text-[#767676] mb-6">
        Creating
      </h2>

      <div className="space-y-2">
        {posts.map((post, index) => (
          <div key={index} className="pb-6">
            <div className="flex items-center mb-1">
              <h3 className="font-semibold text-[14px] leading-[100%] tracking-[0px] mr-1">
                {post.title}
              </h3>
              {post.hasExternalLink && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <p className="text-gray-500">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
