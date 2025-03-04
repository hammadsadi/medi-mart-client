import React from 'react'

const ReviewsItem = () => {
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white ">
      <div className="flex items-start gap-4 p-4 sm:p-5 lg:p-6">
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
              Hammad Sadi
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            accusantium temporibus iure delectus ut totam natus 
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
          
            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by
              <a href="#" className="font-medium underline hover:text-gray-700">
                {" "}
                John{" "}
              </a>
            </p>
          </div>
        </div>
      </div>

      
    </article>
  );
};

export default ReviewsItem;
