import { ExternalLink, Link2, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const FeaturesItem = () => {
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" className="block shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="size-14 rounded-lg object-cover"
          />
        </a>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              Question about Livewire Rendering-3 and Alpine JS{" "}
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            accusantium temporibus iure delectus ut totam natus nesciunt ex?
            Ducimus, enim.
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>

              <p className="text-xs">14 comments</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by
              <a href="#" className="font-medium underline hover:text-gray-700">
                John
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link href='' className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-primary px-3 py-1.5 text-white">
       
          <ExternalLink className='size-3' />
          <span className="text-[10px] font-medium sm:text-xs">Details</span>
        </Link>
      </div>
    </article>
  );
}

export default FeaturesItem;
