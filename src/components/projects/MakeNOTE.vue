<template>
  <div class="flex flex-col items-center justify-center my-24 bg-coal">
      <div class="flex flex-row justify-center my-24 mx-48">
        <div class="w-1/2">
          <img
              src="../../assets/images/projects/makenote/laptop.png"
              alt="Cover Image"
              class="w-5/6 relative"
          />
          </div>
        <div class="w-2/3 flex flex-col justify-between">
          <div>
            <h4 class="font-inter font-semibold tracking-evenTighter text-4xl text-platinum max-w-xl break-words">
              redesigning seamless email notifications for <span class="text-dark-pink">MakeNOTE</span>.
            </h4>
            <p class="font-inter text-lg text-grey tracking-tight leading-tight mt-4">
              Full Stack Developer @ CI Technologies<br/>
              May - August 2024
            </p>
          </div>
          <p class="font-inter text-lg text-platinum tracking-tight max-w-xk break-words ">
            How can we create streamlined, quick-use designs to support the
            fast-paced client environments of police departments?
          </p>
        </div>
      </div>
    </div>
  <div class="mx-48 my-16">
    <div class="flex flex-row justify-between text-coal text-lg font-inter">
      <div><span class="text-dark-pink font-bold">tools.</span> Figma, HTML/CSS, Thymeleaf, Vue, JS, Java</div>
      <div><span class="text-dark-pink font-bold">team.</span> Halle Chan</div>
      <div><span class="text-dark-pink font-bold">team.</span> July 6 - 14 2024</div>
    </div>
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
        MakeNOTE is a performance evaluation platform that allows clients to record multi-form “notes” and produce
        “evaluations” on staff. As a product of CI Technologies, MakeNOTE is heavily operated by police, fire,
        public safety, and/or education departments.
        <br><br>
        As a developer, my task was to implement
        <span class="text-dark-pink">Thymeleaf-integrated template emails into MakeNOTE</span>—both re-creating
        a more seamless user experience and protecting against field injection.
      </p>
      </div>
  </div>
  <div class="bg-background-header my-12 p-0.5">
    <div class="mx-48 my-12">
      <p class="font-inter text-dark-pink text-lg tracking-tighter font-bold">dilemma.</p>
      <h1 class="text-4xl font-dmSans font-semibold tracking-tightest mb-2">ctrl+c... ctrl+v...</h1>
    </div>
  </div>
  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
        Click. Highlight. Copy. Paste. Enter.
        <br><br>
        At best, it’s tedious. At worst, KYP.ai alleges that some employees are copy-pasting data more than
        <span class="font-bold">1200</span> times a day. This kind of repetitive task, like copying and pasting
        data from emails, highlights just how un-intuitive certain workflows can be.
      </p>
      <img src="../../assets/images/projects/makenote/frustration.png" alt="A frustrated comic about email repetition."/>
      <p class="my-8">
        When employees are forced to handle information that could be streamlined, it not only decreases productivity
        but also leads to frustration and potential errors. Poorly designed email interactions can become a significant
        bottleneck—sapping time meant for more meaningful work.
      </p>
    </div>
  </div>
  <div class="bg-background-header my-12 p-0.5">
    <div class="mx-48 my-12">
      <p class="font-inter text-dark-pink text-lg tracking-tighter font-bold">current workflow.</p>
      <h1 class="text-4xl font-dmSans font-semibold tracking-tightest mb-2">email gymnastics.</h1>
    </div>
  </div>
  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
        Our current email system is bare-boned. An incoming request, a forgotten password, a note published about
        one of your subordinates—all sent in a
        <span class="text-dark-pink">text-based format with little-to-no context</span>.
        <br><br>
        Below exhibits a “service request” email,  sent to admin about a request to change account information:
        <img src="../../assets/images/projects/makenote/currentemail.png" alt="Current email with pain points identified."/>
        <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">identifying pain points.</h1>
        <ul>
          <li class="my-8">
            <div class="flex flex-row">
              <img src="../../assets/images/heartbroken.png" alt="Paint point symbol." class="w-8"/>
            <p class="mx-3 font-inter text-dark-pink text-xl tracking-evenTighter font-semibold">Clueless on context.</p>
            </div>
            <p class="my-4">
            Users will become alert of a service request—but that’s all. It becomes inconvenient to examine and classify
            high/low-priority requests, and thus more tempting to ignore. Forbes reports that
            <span class="font-bold">65%</span> of work emails are left unaddressed. There likely persists a high
            possibility of abandonment when users cannot identify its objective.
            </p>
          </li>
          <li class="my-8">
            <div class="flex flex-row">
              <img src="../../assets/images/heartbroken.png" alt="Paint point symbol." class="w-8"/>
              <p class="mx-3 font-inter text-dark-pink text-xl tracking-evenTighter font-semibold">Too many clicks.</p>
            </div>
            <p class="my-4">
              Users are provided a link to the main website domain, but are on their own when navigating to the page
              displaying this service request.
            </p>
          </li>
          <li class="my-8">
            <div class="flex flex-row">
              <img src="../../assets/images/heartbroken.png" alt="Paint point symbol." class="w-8"/>
              <p class="mx-3 font-inter text-dark-pink text-xl tracking-evenTighter font-semibold">A misleading invite.</p>
            </div>
            <p class="my-4">
              The simple formatting and text-based design of the email can mislead users—substantially, older
              demographics still adapting to email use—to reply to the automated email.
            </p>
          </li>
        </ul>
      </p>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">bottom line.</h1>
      <span class="my-8">
          The existing design of MakeNOTE email notifications introduces
        <span class="text-dark-pink">friction and cognitive overload</span>, contributing to
          task abandonment and an increase in unresolved actions.
        </span>
    </div>
  </div>
  <div class="bg-background-header my-12 p-0.5">
    <div class="mx-48 my-12">
      <p class="font-inter text-dark-pink text-lg tracking-tighter font-bold">ideation.</p>
      <h1 class="text-4xl font-dmSans font-semibold tracking-tightest mb-2">effective pings.</h1>
    </div>
  </div>
  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
        Considering pain points identified in the current user workflow, it is possible to illustrate potential
        roadblocks in user experience through an empathy-based user flow diagram:
      </p>
      <img src="../../assets/images/projects/makenote/userflow.png" alt="The old user flow."/>
      <p class="my-8">
        To mitigate the pain points identified in the current flow, the redesigned user flow streamlines interactions,
        removing unnecessary steps and enhancing clarity around
        <span class="text-dark-pink">the core task</span> (i.e., addressing the service request).
      </p>
      <img src="../../assets/images/projects/makenote/newuserflow.png" alt="The new user flow."/>
      <p class="my-8">
        In the redesigned flow, users are provided with direct access to
        <span class="text-dark-pink">essential data and actionable next steps,</span>
        minimizing friction, reducing cognitive load, and eliminating unnecessary clicks and distractions.
      </p>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">message makeover.</h1>
      <p class="my-8">
        Back to the drawing board. Current email notifications can be re-examined to assess what features and design
        elements can be added or modified during the design process. So far, I’ve highlighted problems in the specific
        Service Request notification type. This step seizes the opportunity to take a closer look at each type of email.
        <br><br>
        <span class="font-semibold">Two-Factor Authentication:</span> an email sent with a 6-digit code or verification
        link as a security measure.
      </p>
      <img src="../../assets/images/projects/makenote/2famakeover.png" class="w-5/6" alt="A 2FA email makeover."/>
      <p class="my-8">
        Back to the drawing board. Current email notifications can be re-examined to assess what features and design
        elements can be added or modified during the design process. So far, I’ve highlighted problems in the specific
        Service Request notification type. This step seizes the opportunity to take a closer look at each type of email.
        <br><br>
        <span class="font-semibold">Transfer Request:</span> an email sent to notify management about an employee
        requesting to transfer another employee to their team.
      </p>
      <img src="../../assets/images/projects/makenote/trmakeover.png" class="w-5/6" alt="A 2FA email makeover."/>
      <p class="my-8">
        Further than these specialized email notifications (+ service request) are “generic” emails of which consist
        of an independent description and link with no additional variable-dependent information. To exemplify,
        password reset links and notifications about evaluations being completed are “generic” emails.
        <br><br>
        In these cases, we can apply new formatting principles with no type-specific changes.
      </p>
      <div class="flex flex-row">
        <p class="font-semibold w-2/5">Generic Formatting Principles</p>
        <p>
          Bottom message that indicates copyright and that the nature of the email is automated (i.e. “do-not-reply” clause.)
          <br><br>
          Red and white colour palette to agree with current visual brand identity.
          <br><br>
          Concise messaging in constant text blocks.
          <br><br>
          Hyperlinked buttons instead of direct links.
          <br><br>
        </p>
      </div>
      <p class="my-8">
      With the foundational concepts in place, I started bringing the design ideas to life.
      </p>
    </div>
  </div>
  <div class="bg-background-header my-12 p-0.5">
    <div class="mx-48 my-12">
      <p class="font-inter text-dark-pink text-lg tracking-tighter font-bold">prototyping.</p>
      <h1 class="text-4xl font-dmSans font-semibold tracking-tightest mb-2">new email. who dis?</h1>
    </div>
  </div>
  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">lo-fi prototypes.</h1>
      <img src="../../assets/images/projects/makenote/lofi.png" alt="Lofi prototypes."/>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2 mt-8">design system.</h1>
      <p class="my-8">
        MakeNOTE currently consists a <span class="text-dark-pink">red-white colour palette</span>
        and particular typography following the <span class="text-dark-pink">Roboto Sans</span> font-face.
        To maintain a consistent visual brand entity, email templates replicate the look and feel of the website
        while simultaneously delivering a contemporary, brazen format.
      </p>
      <div class="flex flex-row">
        <div>
          <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">colour palette.</h1>
          <img src="../../assets/images/projects/makenote/colourpalette.png" alt="Colour palette."/>
        </div>
        <div class="mx-8">
          <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">typography.</h1>
          <img src="../../assets/images/projects/makenote/robotosans.png" alt="Typography."/>
        </div>
      </div>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2 mt-8">elements.</h1>
      <img src="../../assets/images/projects/makenote/elements.png" alt="Examples of applied elements."/>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">hi-fi prototypes.</h1>
      <img src="../../assets/images/projects/makenote/hifi.png" alt="Hifi prototypes."/>
    </div>
  </div>
  <div class="bg-background-header my-12 p-0.5">
    <div class="mx-48 my-12">
      <p class="font-inter text-dark-pink text-lg tracking-tighter font-bold">implementation.</p>
      <h1 class="text-4xl font-dmSans font-semibold tracking-tightest mb-2">thymeleaf tinkering.</h1>
    </div>
  </div>

  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
        Certain aspects of the new design were refined during the development phase, specifically within the Thymeleaf
        HTML/CSS setup and the Java + Spring Boot functionality.
      </p>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">development features.</h1>
      <p class="my-8">
        Clicking “Review on MakeNOTE” call-to-action button brings users to the application website with a specific U
        RL to the situation to review. Users still must log in to view, but they are
        <span class="text-dark-pink">sent directly to the notification subject</span> following successful authentication.
        <br><br>
        The subject line of each notification defines involved employees if applicable:
        <img src="../../assets/images/projects/makenote/titlerevamp.png" class="w-5/6"
             alt="Showcasing differences in subject line titles."/>
        <br>
        Any additional MakeNOTE signage is removed.
      </p>
      <h1 class="text-2xl font-inter font-semibold tracking-evenTighter mb-2">mid-development modifications.</h1>
      <p class="my-8">
        During the development phase, some features belonging to the final prototypes were modified for sake of
        development practices, brand adherence, storage preservation, and vanilla HTML/CSS limitations. Check out the
        final client deliverable below.
      </p>
      <div class="flex flex-row">
      <img src="../../assets/images/projects/makenote/devfinals0.png" class="w-1/2 h-2/5"
           alt="Final request emails being sent out to client after development altering."/>
        <img src="../../assets/images/projects/makenote/devfinals.png" class="w-1/2 mx-4"
             alt="Final request emails being sent out to client after development altering."/>
      </div>
      <div class="flex flex-row my-4">
        <img src="../../assets/images/projects/makenote/devfinals2.png" class="w-1/2 h-2/5"
             alt="Final 2FA email being sent out to client after development altering."/>
        <div class="w-1/2 mx-4">
          <img src="../../assets/images/projects/makenote/devfinals3.png"
               alt="Final general email being sent out to client after development altering."/>
          <p class="my-8 mx-4">
            The old joke goes that developers must work a day to keep up with a designer’s hour.
            <br><br>
            Most notably:
            <br><br>
            Fonts became system-adaptable. No Roboto on the computer? Users will see Sans Serif.
            <br><br>
            Icons were removed, as they are configured in Vue (in which cannot be transferred to plain HTML/CSS.)
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-background-header my-12 p-0.5">
    <div class="mx-48 my-12">
      <p class="font-inter text-dark-pink text-lg tracking-tighter font-bold">outcomes & reflections.</p>
      <h1 class="text-4xl font-dmSans font-semibold tracking-tightest mb-2">stamp n' send.</h1>
    </div>
  </div>

  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
        Building a more effective email notification system had me put myself in the shoes of a public safety
        administrator—in a fast-paced environment where we’re always on our toes, streamlining technology can increase
        ease of access and productivity substantively.
        <br><br>
        Of course, <span class="text-dark-pink">no design and development process comes with ease.</span>
        Here are a few funny iterations.
      </p>
      <img src="../../assets/images/projects/makenote/bts.png" alt="Some iterations gone wrong."/>
      <p class="my-8">
        As my first design project in a company environment, I worked independently under the supervision of my mentor
        William Li with the assistance of Coke Zero. Throughout the process, I recognized the importance of empathy in
        design and development, constructing rational insight into their everyday work and how effective design encourages
        productivity.
        <br><br>
        In the future, I am eager to work with user research, testing, and discovery. I would like the opportunity to touch
        base with clients directly to establish a foundation grounded in real user opinions. If I could approach this task
        with different resources, I would highlight an emphasis on user feedback, iterations, and client exploration.
        Thank you for making it all the way down!
      </p>
    </div>
  </div>

  <div class="mx-48 my-16">
    <div class="text-coal font-inter text-lg tracking-tighter my-8">
      <p class="my-8">
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>