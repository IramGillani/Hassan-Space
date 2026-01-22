import { useActionState } from "react";
import { sendEmail } from "../../actions/send-email";
import { FiSend, FiLoader } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import SectionTitle from "./sectionTitle";

const Contact = ({ name }) => {
  const initialState = {
    message: "",
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );
  return (
    <section
      id={name}
      name={name}
      className=" py-20 px-6 bg-light-primary dark:bg-dark-primary"
    >
      <div className="max-w-xl mx-auto">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's talk about your project"
        />
        <div className="bg-dark-primary p-8 rounded-2xl border border-dark-primary shadow-xl">
          <form action={formAction} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="John Doe"
              />
              {state.errors?.name && (
                <p className="text-red-400 text-xs mt-1">{state.errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
              {state.errors?.email && (
                <p className="text-red-400 text-xs mt-1">
                  {state.errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              {state.errors?.message && (
                <p className="text-red-400 text-xs mt-1">
                  {state.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <FiLoader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : state.success ? (
                <>
                  <FaCheck className="w-5 h-5" />
                  Sent!
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
            {state.success && (
              <p className="text-green-400 text-center text-sm">
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
