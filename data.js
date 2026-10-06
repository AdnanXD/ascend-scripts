/* Ascend Scripts - starter content.
   Fill-ins use {Word}. {MyName} and {Company} are filled automatically from Settings.
   IDs prefixed "s-" are starter IDs: "Restore starter templates" re-adds any that are missing. */
window.ASCEND_STARTER = {
  version: 1,
  categories: ["New Inquiry", "Viewings", "Follow-up", "Landlords & Sellers", "Closing"],
  settings: { myName: "Adnan", company: "Ascend Properties" },
  fields: {},
  callNotes: "",
  messages: [
    /* ---------- New Inquiry ---------- */
    {
      id: "s-m01", category: "New Inquiry", title: "First reply - rental inquiry",
      body:
"Hello {Name}, thank you for your enquiry about *{Property}*.\n\nI'd be delighted to help. It is a lovely address, and I can share the layout, the building's amenities and current availability with you.\n\nSo that I can guide you properly, may I ask:\n- When would you ideally like to move in?\n- How many people will be living there?\n\nKind regards,\n{MyName}\n{Company}"
    },
    {
      id: "s-m02", category: "New Inquiry", title: "First reply - sale inquiry",
      body:
"Hello {Name}, thank you for your interest in *{Property}*.\n\nI would be glad to walk you through it: the layout, the surroundings and the terms the owner is open to. Homes at this level are often handled discreetly, so I will share details with you directly.\n\nCould I ask whether you are buying for your own use or as an investment, and what timeline you have in mind? That helps me point you towards the right options.\n\nWarm regards,\n{MyName}\n{Company}"
    },
    {
      id: "s-m03", category: "New Inquiry", title: "Qualifying questions",
      body:
"Hi {Name}, to put together a shortlist that genuinely suits you, a few quick questions:\n\n1. *Budget* - what range are you comfortable with?\n2. *Areas* - any preferred neighbourhoods, or ones to avoid?\n3. *Bedrooms* - how many do you need?\n4. *Move-in date* - when would you like to be settled?\n5. *Furnished or unfurnished?*\n6. *Who is it for* - yourself, your family, or a colleague?\n\nA short voice note is perfectly fine. I'll take it from there.\n\n{MyName}\n{Company}"
    },
    {
      id: "s-m04", category: "New Inquiry", title: "Diaspora / overseas buyer intro",
      body:
"Hello {Name}, thank you for reaching out. Many of our clients are based overseas, so we have a process that makes buying or renting from abroad straightforward.\n\n*How we work with you remotely*\n- Live video-call viewings, so you can see every room, the building and the neighbourhood in real time\n- Clear, step-by-step guidance on the documentation involved\n- Introductions to trusted partners, such as lawyers and property managers, when you need them\n\nTo begin, could you tell me what you are looking for and roughly when you would like to proceed? We can then arrange a short call at a time that suits your time zone.\n\nKind regards,\n{MyName}\n{Company}"
    },

    /* ---------- Viewings ---------- */
    {
      id: "s-m05", category: "Viewings", title: "Shortlist sent",
      body:
"Hi {Name}, as promised, here are *{Count} options* in {Area} that match your brief.\n\nI have kept the list focused on what you told me matters most. Let me know which ones catch your eye and I will arrange viewings, or I can refine the list if something feels off.\n\n{MyName}\n{Company}"
    },
    {
      id: "s-m06", category: "Viewings", title: "Viewing confirmation",
      body:
"Hi {Name}, your viewing is confirmed:\n\n*{Property}*\nDate: {Date}\nTime: {Time}\nAddress: {Address}\n\nSome buildings ask for ID at reception, so it is worth having it with you. If you will be driving, tell me and I will check visitor parking with the building beforehand.\n\nLooking forward to meeting you.\n\n{MyName}\n{Company}"
    },
    {
      id: "s-m07", category: "Viewings", title: "Viewing reminder - day of",
      body:
"Hi {Name}, a quick reminder of your viewing today at *{Time}* ({Property}).\n\nI will meet you at the lobby. If you are running early or late, just send me a message and I will adjust on my side.\n\nSee you shortly,\n{MyName}"
    },
    {
      id: "s-m08", category: "Viewings", title: "Post-viewing follow-up",
      body:
"Hi {Name}, thank you for viewing *{Property}* today. I hope it was useful.\n\nI would love your honest thoughts: what worked well, and what did not feel quite right? It helps me sharpen the search.\n\nIf you would like a second look, perhaps with family or at a different time of day, I am happy to arrange it. Otherwise I can line up a few alternatives for you.\n\n{MyName}\n{Company}"
    },

    /* ---------- Follow-up ---------- */
    {
      id: "s-m09", category: "Follow-up", title: "Gentle nudge - no reply (2-3 days)",
      body:
"Hi {Name}, just a gentle follow-up on my earlier message. I know how busy things get.\n\nIf your plans have changed, no problem at all. And if you would still like to go ahead, tell me what would help most: a shortlist, a viewing, or a quick call?\n\n{MyName}"
    },
    {
      id: "s-m10", category: "Follow-up", title: "Check-in - 1 week later",
      body:
"Hello {Name}, I hope you have had a good week.\n\nA few new properties have come up in {Area} since we last spoke, and one or two may suit your brief. Would you like me to send them across?\n\nIf your requirements have shifted, I am happy to adjust the search.\n\nKind regards,\n{MyName}\n{Company}"
    },
    {
      id: "s-m11", category: "Follow-up", title: "New listing alert - past lead",
      body:
"Hi {Name}, a new listing has just come up that reminded me of what you were looking for:\n\n*{Property}*\nPrice: {Price}\n\nI thought of you first. If it interests you, I can send the full details and arrange a viewing at your convenience.\n\n{MyName}\n{Company}"
    },

    /* ---------- Landlords & Sellers ---------- */
    {
      id: "s-m12", category: "Landlords & Sellers", title: "Landlord / owner outreach",
      body:
"Hello {Name}, I am {MyName} from {Company}, a boutique brokerage in Colombo.\n\nWe work with a select client base of expatriates, diplomats and high-net-worth individuals who are looking for premium homes, and I believe your property at *{Property}* could be a strong match for some of them.\n\nWould you be open to a short conversation about it? There is no obligation, and I would be happy to explain how we handle viewings and tenants discreetly.\n\nKind regards,\n{MyName}"
    },
    {
      id: "s-m13", category: "Landlords & Sellers", title: "Listing proposal follow-up / mandate",
      body:
"Hello {Name}, thank you for your time today. It was a pleasure to see *{Property}*.\n\nTo recap how we would market it:\n- Professional photography and a polished presentation\n- A curated list of qualified buyers or tenants from our own network\n- Discreet handling, with viewings by appointment only\n- Regular updates from me, so you always know where things stand\n\nOur proposed fee is {Fee}. I will send the mandate for your review, and I am glad to go through any part of it on a call.\n\nKind regards,\n{MyName}\n{Company}"
    },
    {
      id: "s-m14", category: "Landlords & Sellers", title: "Listing live update",
      body:
"Hi {Name}, good news: *{Property}* is now live.\n\nYou can view the listing here: {Link}\n\nI have started sharing it with suitable clients from our network, and I will update you as soon as viewings are booked. Please tell me if you would like anything adjusted.\n\n{MyName}\n{Company}"
    },

    /* ---------- Closing ---------- */
    {
      id: "s-m15", category: "Closing", title: "Offer received / negotiation update",
      body:
"Hi {Name}, an update on *{Property}*: we have received an offer of *{Offer}*.\n\nMy suggestion is that we review it together before responding. I will share my read on how serious the other party is, what is on the table beyond price, and where I see room to negotiate.\n\nWhen is a good time for a quick call today?\n\n{MyName}\n{Company}"
    },
    {
      id: "s-m16", category: "Closing", title: "Deal closed - thank you + referral ask",
      body:
"Dear {Name}, congratulations, and thank you for trusting {Company} with {Property}. It has been a pleasure working with you.\n\nIf there is anything you need as you settle in, from trusted contractors to property management, please do not hesitate to ask.\n\nOne small request: if you know anyone looking to buy, rent or sell in Colombo, I would be grateful for an introduction. A personal recommendation is the greatest compliment we can receive.\n\nWith warm regards,\n{MyName}"
    }
  ],

  flows: [
    {
      id: "s-f-buyer", title: "Buyer / Tenant",
      steps: [
        {
          id: "s-f-buyer-1", title: "Opener & permission",
          say: "Hello {Name}, this is {MyName} from {Company}. I'm calling about your enquiry.\n\nIs now a good moment? Do you have five minutes?",
          notes: "Smile and slow down. Use their name early. If it is a bad time, agree a specific call-back time before you hang up."
        },
        {
          id: "s-f-buyer-2", title: "Rapport & context",
          say: "Thank you. Before we talk about properties, tell me a little about the move.\n\nAre you relocating to Colombo, or already here? And who is the home for?",
          notes: "Listen for: reason for the move (posting, return home, investment), family size, school or embassy ties, urgency. Let them talk. Do not pitch yet."
        },
        {
          id: "s-f-buyer-3", title: "Needs",
          say: "Which areas have you been considering?\n\nWhat size of home do you need? And what is non-negotiable for you: a view, security, parking, a pool, being close to schools or the office?",
          notes: "Separate must-haves from nice-to-haves. Ask: \"What would make you say no instantly?\" Note area names so you can match them later."
        },
        {
          id: "s-f-buyer-4", title: "Budget & timing",
          say: "So that I only show you what is relevant, what range are you comfortable with?\n\nAnd when would you like to be settled in?",
          notes: "Ask for a range, not a single number. Check who is paying (self, company, embassy allowance). Real deadline or flexible? Do not react to the figure."
        },
        {
          id: "s-f-buyer-5", title: "Decision process",
          say: "Is anyone else involved in the decision, a spouse, family or your company?\n\nHave you already viewed anything, or spoken with other agents?",
          notes: "Identify the true decision-maker and offer to include them in viewings. Never criticise other agents. Note what they have already seen and rejected."
        },
        {
          id: "s-f-buyer-6", title: "Recap & propose next step",
          say: "Let me make sure I have this right: [area], [size], [budget range], [move-in date].\n\nBased on that, I'd suggest I send you a focused shortlist today and arrange viewings for the best of them. Does that sound right?",
          notes: "Repeat back in their own words. Get a clear yes to the shortlist before you move on to dates."
        },
        {
          id: "s-f-buyer-7", title: "Close",
          say: "Perfect. I'll send the shortlist on WhatsApp shortly. Is this the best number to reach you on?\n\nWhich days and times suit you for viewings this week? I'll confirm everything in writing.",
          notes: "Lock a day and time while you are still on the call. Send the viewing confirmation straight afterwards. Thank them for their time."
        }
      ]
    },
    {
      id: "s-f-landlord", title: "Landlord / Seller",
      steps: [
        {
          id: "s-f-landlord-1", title: "Opener",
          say: "Hello {Name}, this is {MyName} from {Company}. Thank you for taking my call.\n\nI'd like to understand your property and see whether we can be useful. Do you have a few minutes?",
          notes: "Warm and unhurried. Owners of premium property value discretion and respect for their time. Confirm you are speaking to the owner or decision-maker."
        },
        {
          id: "s-f-landlord-2", title: "Understand the property",
          say: "Tell me about the property: where it is, the size, the condition, and whether it is furnished.\n\nHave there been any recent upgrades or issues I should know about?",
          notes: "Note unit type, bedrooms, floor, view, parking, building amenities, condition. Ask about the building and management. Be curious, not evaluative."
        },
        {
          id: "s-f-landlord-3", title: "Their goals",
          say: "What are you hoping to achieve?\n\nDo you have a price in mind, and a timeline? Is it vacant at the moment, or is there a tenant in place?",
          notes: "Listen for motivation: urgent, or testing the market? Note notice periods, co-owners and any title or paperwork questions. Refer legal questions to their lawyer."
        },
        {
          id: "s-f-landlord-4", title: "Credibility",
          say: "Let me tell you how we work. {Company} focuses on a small number of premium properties, and we work with expatriates, diplomats and high-net-worth clients.\n\nWe market discreetly: professional photography, a curated list of qualified clients, and viewings only by appointment.",
          notes: "Be specific, not boastful. Mention only real past work and never quote numbers you cannot back up. Offer to share references if they ask."
        },
        {
          id: "s-f-landlord-5", title: "Pricing conversation",
          say: "Here is how I would approach pricing. We look at comparable properties, both current and recently completed, and position yours on its merits.\n\nI will not promise a number I cannot support. I'd rather agree a realistic range with you and adjust with real feedback from the market. How does that sit with you?",
          notes: "Anchor on comparables, not hopes. Avoid overpromising to win the listing. If their expectation is far off, ask what they are basing it on before disagreeing."
        },
        {
          id: "s-f-landlord-6", title: "Ask for the mandate / next step",
          say: "The next step I'd suggest is a visit to see the property and arrange the photography.\n\nIf you are comfortable, we can formalise our arrangement then. Would [day] or [day] suit you?",
          notes: "Ask plainly for the mandate. Know your fee terms before the call. Offer two specific times rather than an open question."
        },
        {
          id: "s-f-landlord-7", title: "Close & confirm",
          say: "Thank you for your time. To confirm: I'll visit on [date and time], bring a short proposal and the mandate for you to review, and send a summary on WhatsApp today.\n\nIs there anything else I should know before then?",
          notes: "Repeat the plan back. Send the WhatsApp recap within the hour. Note any follow-ups you promised."
        }
      ]
    }
  ],

  objections: [
    {
      id: "s-o01", category: "Fees", title: "Your fee is too high.",
      answer: "I understand. It is an important number, and you should feel it is justified. The fee covers the full service: qualified clients, discreet handling, professional presentation, negotiation, and support right up to handover. I'd rather show you the value than argue about the figure. Which part of the fee feels out of line with what you expected?"
    },
    {
      id: "s-o02", category: "Competition", title: "I'll just find it myself / deal directly with the owner.",
      answer: "That is completely reasonable, and many people start that way. Where I can help is with properties that may not be widely advertised, plus an experienced voice in the negotiation and the paperwork, so nothing gets missed. There is no pressure either way. What have you found so far that I could check for you?"
    },
    {
      id: "s-o03", category: "Competition", title: "I'm already working with another agent.",
      answer: "Thank you for telling me, and I respect that. If you have signed an agreement with them, I will of course honour it. Many clients find a second perspective helpful, particularly if they are not yet seeing what they want. I am not asking you to change anything. What are you hoping to see that you have not seen yet?"
    },
    {
      id: "s-o04", category: "Price", title: "The price is too high.",
      answer: "That is fair, and thank you for being direct. Let us look at it properly: how does it compare with the other places you have seen, and what budget do you have in mind? There may be room to negotiate, or a similar option that suits you better. What would feel like the right level for this property?"
    },
    {
      id: "s-o05", category: "Stalling", title: "I need to think about it.",
      answer: "Of course. It is a big decision and you should take your time. So that I can help in the right way, is there something specific you would like to think through, such as the price, the location or the timing? I am happy to send a short summary for you to review. When would you like me to check in?"
    },
    {
      id: "s-o06", category: "Stalling", title: "Just send me the details on WhatsApp.",
      answer: "Happy to. So that I send what is genuinely relevant rather than a pile of listings, may I ask two quick things: your preferred area and your budget range? I will send a tailored shortlist today, and you can tell me what works. Which area should I focus on first?"
    },
    {
      id: "s-o07", category: "Stalling", title: "I'm just looking for now.",
      answer: "That is perfectly fine. Looking is how you find the right place, and I will keep it low-pressure. If you tell me roughly what you like, I can send a few examples so you get a feel for the market. Even a rough idea of when you would like to be settled helps me guide you. When were you thinking?"
    },
    {
      id: "s-o08", category: "Sellers", title: "Why should I give you an exclusive?",
      answer: "A fair question. With an exclusive, I can invest properly: professional photography, a curated buyer list, discreet handling, and one clear voice to the market, rather than your property being diluted across many agents. You also have one person accountable for results and updates. We can agree a sensible period and review it together. What would you need to see from me to feel confident?"
    },
    {
      id: "s-o09", category: "Sellers", title: "Another agent said they can get me a higher price.",
      answer: "They may be right, and I would never want to talk you out of ambition. What matters is a price that buyers will actually pay, supported by comparable properties. I will show you the comparables and my reasoning, and you can judge for yourself. Did they share how they arrived at that number?"
    },
    {
      id: "s-o10", category: "Price", title: "Can you get the owner to reduce the price?",
      answer: "I can certainly ask, and I will present your position clearly. Owners respond best to a serious, well-reasoned proposal, so it helps to know what you would be comfortable with and how quickly you could proceed. Shall we put together what a reasonable offer looks like?"
    }
  ]
};
