import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blooming Brands | FAQ's",
  description: "Frequently Asked Questions",
};

interface Props {
  pageTitle?: string;
}

const FAQPage = () => {
  return (
    <>
      <PageHeader pageTitle="Frequently Asked Questions" />
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col justify-start items-center py-10 bg-sky-600 text-white">
          <h1 className="text-4xl text-center font-black">
            Want to know how we&apos;re different ?
          </h1>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-center py-10 bg-white text-black">
          <div className="container mx-auto md:px-6 xl:px-24">
            <section className="mb-32">
              <h2 className="mb-6 pl-6 text-3xl font-bold">
                Frequently asked questions
              </h2>

              <div id="accordionFlushExample">
                <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
                  <h2 className="mb-0" id="flush-headingOne">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      type="button"
                      data-te-collapse-init
                      data-te-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      1. How long it takes to get a new website live online ?
                      <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="!visible border-0"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="flush-headingOne"
                    data-te-parent="#accordionFlush"
                  >
                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                      Minimum project timeline is 6 -8 weeks. However, this
                      depends on the project there is no one size fits all. Our
                      solutions are customized to fit your business objective.
                    </div>
                  </div>
                </div>
                <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
                  <h2 className="mb-0" id="flush-headingTwo">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      2. How do I know I’ll love my completed website
                      <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="!visible hidden border-0"
                    data-te-collapse-item
                    aria-labelledby="flush-headingTwo"
                    data-te-parent="#accordionFlush"
                  >
                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                      All designs are guaranteed. We guarantee to provide
                      revisions until such time that you are happy with your
                      website design and ready to proceed, without accruing
                      additional expenses. Since the custom design process is
                      broken down into two phases, wireframe blueprint layout,
                      and then full detail photoshop design, you&apos;ll first
                      see the structure in black and white. This process enables
                      you to clearly prioritize any structural changes before
                      the brand colors and any textures or other details are
                      added. 
                    </div>
                  </div>
                </div>
                <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                  <h2 className="mb-0" id="flush-headingThree">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      3. Will I be able to make changes to the website once it’s
                      published?
                      <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="!visible hidden rounded-b-lg"
                    data-te-collapse-item
                    aria-labelledby="flush-headingThree"
                    data-te-parent="#accordionFlush"
                  >
                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                      Yes we will train you on how to make changes to the
                      content on each page or add new pages.
                    </div>
                  </div>
                </div>
                <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                  <h2 className="mb-0" id="flush-headingFour">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      4. Can I sell products through my website?
                      <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="!visible hidden rounded-b-lg"
                    data-te-collapse-item
                    aria-labelledby="flush-headingFour"
                    data-te-parent="#accordionFlush"
                  >
                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                      eCommerce Add-On Package * Shop / Product Listing Page *
                      Homepage call to action component to drive traffic to
                      visit Shop or Featured Products * Product Detail Page *
                      Cart Page * Some eCommerce stores allow user registration
                      which includes login utility menu, registered user
                      experience, forgot password, account dashboard for example
                      * Checkout * Payment Gateway integration – Credit Card,
                      Authorize.net, Stripe, Square, Paypal * Shipping
                      integration – USPS, UPS, FedEx – some of these services
                      require weights and dimensions on all products * Order
                      verification and platform training for order fulfillment
                      team
                    </div>
                  </div>
                </div>
                <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                  <h2 className="mb-0" id="flush-headingFive">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      5. How many pages can my website have ?
                      <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="!visible hidden rounded-b-lg"
                    data-te-collapse-item
                    aria-labelledby="flush-headingFive"
                    data-te-parent="#accordionFlush"
                  >
                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                      We have different development packages which contains a
                      set number of pages that we create for the project, but
                      once your team is trained on how to use the website they
                      will be able to add as many pages as needed. We also offer
                      a complete site management plan which includes unlimited
                      updates and changes to your website.
                    </div>
                  </div>
                </div>
                <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                  <h2 className="mb-0" id="flush-headingSix">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      6. Praesentium voluptatibus temporibus consequatur non
                      aspernatur?
                      <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    className="!visible hidden rounded-b-lg"
                    data-te-collapse-item
                    aria-labelledby="flush-headingSix"
                    data-te-parent="#accordionFlush"
                  >
                    <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit optio vitae inventore autem fugiat rerum sed
                      laborum. Natus recusandae laboriosam quos pariatur
                      corrupti id dignissimos deserunt, praesentium voluptatibus
                      temporibus consequatur non aspernatur laborum rerum nemo
                      dolorem libero inventore provident exercitationem sunt
                      totam aperiam. Facere sunt quos commodi obcaecati
                      temporibus alias amet! Quam quisquam laboriosam quae
                      repellendus non cum adipisci odio?
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
