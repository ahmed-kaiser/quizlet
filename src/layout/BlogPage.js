const BlogPage = () => {
  return (
    <section className="sm:container mx-auto lg:max-w-4xl px-3 pt-10 pb-32 ">
      <h2 className="font-bold text-xl border-b-2 border-green-50 pb-2 text-cyan-600">
        Blog Post
      </h2>
      <div className="mt-3 max-w-4xl cursor-pointer mx-auto tracking-wide">
        <div className="my-4 bg-slate-100 px-3 py-4 rounded-sm">
          <h3 className="font-semibold text-lg text-slate-600">
            <span className="text-cyan-600">1.</span> What is the purpose of
            react router?
          </h3>
          <p className="my-2 pl-2 leading-7">
            React Router is a JavaScript library used to handle client and
            server-side routing in React applications. It allows the creation of
            single-page web or mobile apps that allows navigation without the
            page refreshing. React Router also gives us access to browser
            history features while maintaining the correct view of the
            application.
          </p>
        </div>
        <div className="my-4 bg-slate-100 px-3 py-4 rounded-sm">
          <h3 className="font-semibold text-lg text-slate-600">
            <span className="text-cyan-600">2.</span> How does context api
            works?
          </h3>
          <p className="my-2 pl-2 leading-7">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on.
            <br /> All we need to create a context by{" "}
            <b>React.createContext()</b>, store it in a variable ane export it
            so that child component can use the context. Then we have to wrap
            parent component with <b>Provider</b> component. It will hold all
            those properties which need to be provided. Child component can
            easily excess the context property by using <b>useContext</b> hook.
          </p>
        </div>
        <div className="my-4 bg-slate-100 px-3 py-4 rounded-sm">
          <h3 className="font-semibold text-lg text-slate-600">
            <span className="text-cyan-600">3.</span> About useRef hooks.
          </h3>
          <p className="my-2 pl-2"><b>useRef()</b> hook is used to create persisted mutable values (also known as references or refs), as well as access DOM elements. useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a <b>reference</b>. A reference is an object having a special property current. There are 2 rules to remember about references - first, The value of the reference is persisted (stays the same) between component re-renderings and second, Updating a reference doesn't trigger a component re-rendering.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
