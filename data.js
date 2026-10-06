/* Ascend Scripts - starter content.
   Fill-ins use {Word}. {MyName} and {Company} are filled automatically from Settings.
   IDs prefixed "s-" are starter IDs: "Restore starter templates" re-adds any that are missing. */
window.ASCEND_STARTER = {
  version: 1,
  categories: ["Col 3 House for Sale 175Mn", "Col 5 Siripa Lane House", "Owner Selling (House/Apt)", "Landlord Renting (House/Apt)", "New Inquiry", "Viewings", "Follow-up", "Landlords & Sellers", "Closing"],
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
    },

    /* ---------- Col 3 House for Sale 175Mn (starter ids s-c3-*) ---------- */
    {
      id: "s-c3-01", category: "Col 3 House for Sale 175Mn", title: "1 · First reply",
      body:
"Hi, greetings from {Company}. My name is {MyName}.\n\nThe 4-bedroom house in Kollupitiya, Colombo 3 is listed at *LKR 175 Mn*.\n\nMay I ask whether you're looking to buy for yourself or your family, or enquiring as an agent for a client?"
    },
    {
      id: "s-c3-02", category: "Col 3 House for Sale 175Mn", title: "2 · Property details",
      body:
"Here are the details:\n\n*4-Bedroom House for Sale - Kollupitiya, Colombo 3*\n\n• Location: Off Galle Road, with easy access from Galle Road and Marine Drive\n• Price: *LKR 175 Mn*\n• Land: 8.3 perches\n• Floor area: Approx. 4,500 sq.ft\n• 2 storeys\n• 4 bedrooms\n• 4 bathrooms\n• Parking for 2 vehicles\n• Laundry area, 2 balconies and a backyard\n\nI'll send the photos now."
    },
    {
      id: "s-c3-03", category: "Col 3 House for Sale 175Mn", title: "3 · After photos",
      body:
"These are the photos of the living and dining area, bedrooms, courtyard, balconies, bathrooms, parking and outside of the house.\n\nDoes this look like the kind of home you're looking for?"
    },
    {
      id: "s-c3-04", category: "Col 3 House for Sale 175Mn", title: "4 · Location & budget",
      body:
"Thank you, {Name}. Does Kollupitiya suit you as a location?\n\nAnd is LKR 175 Mn within the range you're comfortable with?"
    },
    {
      id: "s-c3-05", category: "Col 3 House for Sale 175Mn", title: "5 · Main requirements",
      body:
"What are the main things you need in a house? For example, number of bedrooms, parking, or space for the family.\n\nThat way I can tell you honestly if this one is a good fit."
    },
    {
      id: "s-c3-06", category: "Col 3 House for Sale 175Mn", title: "6 · Timing & funding",
      body:
"May I ask when you're hoping to buy?\n\nAnd will you be using your own funds, a bank loan, or money from selling another property?"
    },
    {
      id: "s-c3-07", category: "Col 3 House for Sale 175Mn", title: "7 · Who decides",
      body:
"Will anyone else be part of the decision, like your spouse or family? It's best if they can join the viewing too."
    },
    {
      id: "s-c3-08", category: "Col 3 House for Sale 175Mn", title: "8 · Offer a viewing",
      body:
"From what you've shared, this house could suit you well. Would you like to see it in person?\n\nWhich day and time would work best for you? I'll check with the owner and confirm."
    },
    {
      id: "s-c3-09", category: "Col 3 House for Sale 175Mn", title: "9 · Confirm viewing",
      body:
"Your viewing is confirmed:\n\n*4-Bedroom House - Kollupitiya, Colombo 3*\nDate: {Date}\nTime: {Time}\nLocation: {Location pin}\n\nPlease let me know who will be joining you. I'll meet you there. If anything changes, just message me."
    },
    {
      id: "s-c3-10", category: "Col 3 House for Sale 175Mn", title: "10 · Viewing reminder",
      body:
"Hi {Name}, just a reminder of the Colombo 3 house viewing today at *{Time}*.\n\nI'll meet you at the house. Here is the location: {Location pin}"
    },
    {
      id: "s-c3-11", category: "Col 3 House for Sale 175Mn", title: "11 · After viewing",
      body:
"Hi {Name}, thank you for coming to see the house today.\n\nWhat did you think? Was there anything you liked, or anything that didn't feel right?"
    },
    {
      id: "s-c3-12", category: "Col 3 House for Sale 175Mn", title: "12 · Interested after viewing",
      body:
"Great to hear you liked it, {Name}.\n\nIs there anything you'd like to check before moving forward? For example, documents, a second visit, or questions for the owner.\n\nWhen you're ready, you can send me your offer in writing here and I'll present it to the owner."
    },
    {
      id: "s-c3-13", category: "Col 3 House for Sale 175Mn", title: "13 · Not a fit after viewing",
      body:
"Thank you for letting me know, {Name}. I really appreciate your honest feedback.\n\nMay I ask what didn't suit you? If I come across a house that fits better, I'll let you know."
    },
    {
      id: "s-c3-14", category: "Col 3 House for Sale 175Mn", title: "14 · No reply after details",
      body:
"Hi, just checking if you had a chance to look at the photos of the Colombo 3 house.\n\nDoes it suit what you're looking for? Happy to answer any questions."
    },
    {
      id: "s-c3-15", category: "Col 3 House for Sale 175Mn", title: "15 · Last follow-up",
      body:
"Hi, following up one last time on the Kollupitiya house. If the timing isn't right, no problem at all.\n\nShall I keep you in mind for similar homes in Colombo?"
    },
    {
      id: "s-c3-16", category: "Col 3 House for Sale 175Mn", title: "Q · Where exactly is it?",
      body:
"It's in Kollupitiya, Colombo 3, just off Galle Road, with easy access from both Galle Road and Marine Drive.\n\nI share the exact location before a viewing. Would you like to arrange one?"
    },
    {
      id: "s-c3-17", category: "Col 3 House for Sale 175Mn", title: "Q · What's the best price?",
      body:
"The asking price is *LKR 175 Mn*.\n\nIf you like the house after seeing it, I'm happy to present your offer to the owner. Would you like to view it first?"
    },
    {
      id: "s-c3-18", category: "Col 3 House for Sale 175Mn", title: "Q · Is it negotiable?",
      body:
"The owner has listed it at *LKR 175 Mn*, and any offer would go to the owner for a decision.\n\nOnce you've seen the house, you can send me your offer in writing and I'll present it. Shall we arrange a viewing?"
    },
    {
      id: "s-c3-19", category: "Col 3 House for Sale 175Mn", title: "Q · My budget is lower",
      body:
"Thank you for being open with me. May I ask what range you would be comfortable with?\n\nIf this one isn't the right fit, I can look for other houses in Colombo that match your budget."
    },
    {
      id: "s-c3-20", category: "Col 3 House for Sale 175Mn", title: "Q · Can I view it?",
      body:
"Yes, of course. Which day and time would suit you? I'll check with the owner and confirm.\n\nWill anyone be joining you for the viewing?"
    },
    {
      id: "s-c3-21", category: "Col 3 House for Sale 175Mn", title: "Q · I need a bank loan",
      body:
"That's fine, many buyers use a bank loan. Have you already spoken to your bank, or would you like to get a pre-approval first?\n\nKnowing your loan amount helps us plan the next steps smoothly."
    },
    {
      id: "s-c3-22", category: "Col 3 House for Sale 175Mn", title: "Q · Need to sell my property first",
      body:
"That makes sense. May I ask where your current property is, and whether it's already on the market?\n\nI'd be happy to help you sell it too, so both can move together."
    },
    {
      id: "s-c3-23", category: "Col 3 House for Sale 175Mn", title: "Q · Buying from overseas",
      body:
"No problem, we often work with buyers living overseas.\n\nI can do a live video call of the house so you can see every room. A family member here is also welcome to view it in person for you.\n\nWhen would suit you for a video call?"
    },
    {
      id: "s-c3-24", category: "Col 3 House for Sale 175Mn", title: "Q · Agent with a buyer",
      body:
"Thank you. May I ask a few quick things?\n\n1. Do you have a specific buyer for this house?\n2. Have they seen the price and photos?\n3. Will they attend the viewing?\n\nBefore arranging access, let's confirm our co-broking and commission terms."
    },
    {
      id: "s-c3-25", category: "Col 3 House for Sale 175Mn", title: "Q · Offer / wants to meet owner",
      body:
"Thank you, {Name}. I'm working with the owner on this sale, so I can pass your offer on directly.\n\nPlease send me your offer in writing here, with:\n• Your offer price\n• How you plan to pay (own funds or bank loan)\n• Your preferred timeline\n\nI'll present it to the owner and come back to you."
    },

    /* ---------- Col 5 Siripa Lane House ---------- */
    {
      "id": "s-c5-01",
      "category": "Col 5 Siripa Lane House",
      "title": "1 · First reply",
      "body": "Hi, greetings from {Company}. My name is {MyName}.\n\nThank you for your interest in the house on *Siripa Lane, Colombo 5*. It sits on a *32-perch* land.\n\nMay I ask whether you're looking to buy for yourself or your family, or enquiring as an agent for a client?"
    },
    {
      "id": "s-c5-02",
      "category": "Col 5 Siripa Lane House",
      "title": "2 · Property details",
      "body": "Here are the details:\n\n*House for Sale - Siripa Lane, Colombo 5*\n\n• Location: Siripa Lane, Thimbirigasyaya, Colombo 5\n• Land: 32 perches\n• Existing house with a garden\n• Price: *{Asking price}*\n\nI'll send the photo now."
    },
    {
      "id": "s-c5-03",
      "category": "Col 5 Siripa Lane House",
      "title": "3 · After photos",
      "body": "Here's the house and garden.\n\nMay I ask, are you looking for a home to live in, or more as an investment?"
    },
    {
      "id": "s-c5-04",
      "category": "Col 5 Siripa Lane House",
      "title": "4 · Budget",
      "body": "Thank you, {Name}. Does Colombo 5 suit you as a location?\n\nAnd may I ask what budget range you have in mind?"
    },
    {
      "id": "s-c5-05",
      "category": "Col 5 Siripa Lane House",
      "title": "5 · Main requirements",
      "body": "What are the main things you're looking for? For example, land size, number of bedrooms, or space for the family.\n\nThat way I can tell you honestly if this one is a good fit."
    },
    {
      "id": "s-c5-06",
      "category": "Col 5 Siripa Lane House",
      "title": "6 · Timing & funding",
      "body": "May I ask when you're hoping to buy?\n\nAnd will you be using your own funds, a bank loan, or money from selling another property?"
    },
    {
      "id": "s-c5-07",
      "category": "Col 5 Siripa Lane House",
      "title": "7 · Who decides",
      "body": "Will anyone else be part of the decision, like your spouse or family? It's best if they can join the viewing too."
    },
    {
      "id": "s-c5-08",
      "category": "Col 5 Siripa Lane House",
      "title": "8 · Offer a viewing",
      "body": "From what you've shared, this property could suit you well. Would you like to see it in person?\n\nWhich day and time would work best for you? I'll check with the owner and confirm."
    },
    {
      "id": "s-c5-09",
      "category": "Col 5 Siripa Lane House",
      "title": "9 · Confirm viewing",
      "body": "Your viewing is confirmed:\n\n*House on 32 Perches - Siripa Lane, Colombo 5*\nDate: {Date}\nTime: {Time}\nLocation: {Location pin}\n\nPlease let me know who will be joining you. I'll meet you there. If anything changes, just message me."
    },
    {
      "id": "s-c5-10",
      "category": "Col 5 Siripa Lane House",
      "title": "10 · Viewing reminder",
      "body": "Hi {Name}, just a reminder of the Siripa Lane viewing today at *{Time}*.\n\nI'll meet you at the house. Here is the location: {Location pin}"
    },
    {
      "id": "s-c5-11",
      "category": "Col 5 Siripa Lane House",
      "title": "11 · After viewing",
      "body": "Hi {Name}, thank you for coming to see the property today.\n\nWhat did you think? Was there anything you liked, or anything that didn't feel right?"
    },
    {
      "id": "s-c5-12",
      "category": "Col 5 Siripa Lane House",
      "title": "12 · Interested after viewing",
      "body": "Great to hear you liked it, {Name}.\n\nIs there anything you'd like to check before moving forward? For example, documents, a second visit, or questions for the owner.\n\nWhen you're ready, you can send me your offer in writing here and I'll present it to the owner."
    },
    {
      "id": "s-c5-13",
      "category": "Col 5 Siripa Lane House",
      "title": "13 · Not a fit after viewing",
      "body": "Thank you for letting me know, {Name}. I really appreciate your honest feedback.\n\nMay I ask what didn't suit you? If I come across a property that fits better, I'll let you know."
    },
    {
      "id": "s-c5-14",
      "category": "Col 5 Siripa Lane House",
      "title": "14 · No reply after details",
      "body": "Hi, just checking if you had a chance to look at the Siripa Lane property in Colombo 5.\n\nDoes it suit what you're looking for? Happy to answer any questions."
    },
    {
      "id": "s-c5-15",
      "category": "Col 5 Siripa Lane House",
      "title": "15 · Last follow-up",
      "body": "Hi, following up one last time on the Siripa Lane property. If the timing isn't right, no problem at all.\n\nShall I keep you in mind for similar properties in Colombo?"
    },
    {
      "id": "s-c5-16",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Where exactly is it?",
      "body": "It's on Siripa Lane in Thimbirigasyaya, Colombo 5.\n\nI share the exact location before a viewing. Would you like to arrange one?"
    },
    {
      "id": "s-c5-17",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Bedrooms / house details?",
      "body": "Good question. I'm confirming the full house details with the owner, such as bedrooms, bathrooms and floor area, and I'll send them to you shortly.\n\nIn the meantime, may I ask how many bedrooms you need?"
    },
    {
      "id": "s-c5-18",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Price per perch?",
      "body": "The property is priced as a whole, the house and the 32-perch land together, at *{Asking price}*.\n\nSince it comes with an existing house and garden, it's best seen in person. Shall we arrange a viewing?"
    },
    {
      "id": "s-c5-19",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · What's the best price?",
      "body": "The asking price is *{Asking price}*.\n\nIf you like the property after seeing it, I'm happy to present your offer to the owner. Would you like to view it first?"
    },
    {
      "id": "s-c5-20",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Is it negotiable?",
      "body": "The owner has listed it at *{Asking price}*, and any offer would go to the owner for a decision.\n\nOnce you've seen the property, you can send me your offer in writing and I'll present it. Shall we arrange a viewing?"
    },
    {
      "id": "s-c5-21",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Low offer (land value only)",
      "body": "Thank you, {Name}. I'm happy to present any written offer to the owner.\n\nJust to note, this is a house with a garden on 32 perches, not bare land, so it's worth seeing before you decide on a figure. Would you like to arrange a viewing first?"
    },
    {
      "id": "s-c5-22",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · My budget is lower",
      "body": "Thank you for being open with me. May I ask what range you would be comfortable with?\n\nIf this one isn't the right fit, I can look for other properties in Colombo that match your budget."
    },
    {
      "id": "s-c5-23",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Can I build / develop?",
      "body": "I can't confirm zoning or development approvals yet, so I don't want to promise anything on that.\n\nMay I ask what you have in mind? I'll check with the owner what documents are available, such as the deed and survey plan, so you can do your own checks."
    },
    {
      "id": "s-c5-24",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Documents / deed?",
      "body": "I'll confirm with the owner which documents can be shared, such as the deed and survey plan, and at what stage.\n\nWould you like to view the property first?"
    },
    {
      "id": "s-c5-25",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Can I view it?",
      "body": "Yes, of course. Which day and time would suit you? I'll check with the owner and confirm.\n\nWill anyone be joining you for the viewing?"
    },
    {
      "id": "s-c5-26",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · I need a bank loan",
      "body": "That's fine, many buyers use a bank loan. Have you already spoken to your bank, or would you like to get a pre-approval first?\n\nKnowing your loan amount helps us plan the next steps smoothly."
    },
    {
      "id": "s-c5-27",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Need to sell my property first",
      "body": "That makes sense. May I ask where your current property is, and whether it's already on the market?\n\nI'd be happy to help you sell it too, so both can move together."
    },
    {
      "id": "s-c5-28",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Buying from overseas",
      "body": "No problem, we often work with buyers living overseas.\n\nI can do a live video call of the property so you can see it properly. A family member here is also welcome to view it in person for you.\n\nWhen would suit you for a video call?"
    },
    {
      "id": "s-c5-29",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Agent with a buyer",
      "body": "Thank you. May I ask a few quick things?\n\n1. Do you have a specific buyer for this property?\n2. Have they seen the details and photo?\n3. Will they attend the viewing?\n\nBefore arranging access, let's confirm our co-broking and commission terms."
    },
    {
      "id": "s-c5-30",
      "category": "Col 5 Siripa Lane House",
      "title": "Q · Offer / wants to meet owner",
      "body": "Thank you, {Name}. I'm working with the owner on this sale, so I can pass your offer on directly.\n\nPlease send me your offer in writing here, with:\n• Your offer price\n• How you plan to pay (own funds or bank loan)\n• Your preferred timeline\n\nI'll present it to the owner and come back to you."
    },

    /* ---------- Owner Selling & Landlord Renting (House/Apt) ---------- */
    {
      "id": "s-sl-01",
      "category": "Owner Selling (House/Apt)",
      "title": "1 · Reply to owner enquiry",
      "body": "Hi {Name}, thank you for reaching out. This is {MyName} from {Company}.\n\nI'd be glad to help you sell your property. To guide you properly, may I ask a few quick things?\n\n• Is it a house or an apartment, and where is it?\n• Roughly how soon would you like to sell?"
    },
    {
      "id": "s-sl-02",
      "category": "Owner Selling (House/Apt)",
      "title": "2 · Outreach to owner's own ad",
      "body": "Hi {Name}, this is {MyName} from {Company}. I came across your advertisement for the {Property}.\n\nWe work with expat, diplomatic, corporate and local buyers who are looking in {Area}, so I thought it worth a short message.\n\nWould you be open to speaking with an agent about it? A brief call is enough, and there is no pressure at all."
    },
    {
      "id": "s-sl-03",
      "category": "Owner Selling (House/Apt)",
      "title": "3 · Follow-up (no reply)",
      "body": "Hi {Name}, I wrote a couple of days ago about your {Property}. I know messages can get buried.\n\nIs it still available? If you would rather handle it yourself, I completely understand and will leave it with you."
    },
    {
      "id": "s-sl-04",
      "category": "Owner Selling (House/Apt)",
      "title": "4 · Property basics",
      "body": "Thank you, {Name}. So I can understand the property properly, may I ask a few things?\n\n• How many bedrooms and bathrooms does it have?\n• What is the land size in perches (for a house), or the floor area (for an apartment)?\n• Is there parking, and what condition is it in? Has anything been renovated recently?\n• Is it furnished, and is it occupied or vacant?\n\nShort answers or a voice note are fine."
    },
    {
      "id": "s-sl-05",
      "category": "Owner Selling (House/Apt)",
      "title": "5 · Motivation & timeline",
      "body": "That's helpful, {Name}. May I ask what has led you to consider selling, and when you would ideally like it completed?\n\nAnd if it took longer than you planned, what would that mean for you?"
    },
    {
      "id": "s-sl-06",
      "category": "Owner Selling (House/Apt)",
      "title": "6 · Price expectation",
      "body": "Thank you, {Name}. Do you have a price in mind? And how did you arrive at that figure, for example a recent valuation, or similar sales you've heard about?\n\nWhatever you share, I will give you my honest view, based on what is selling in {Area}, so we price it with confidence."
    },
    {
      "id": "s-sl-07",
      "category": "Owner Selling (House/Apt)",
      "title": "7 · Decision makers",
      "body": "Is anyone else involved in the decision about the sale, such as co-owners or family members, perhaps some living abroad?\n\nIf so, it helps to include them early. They are welcome to join our call or the visit, in person or by video, so everyone hears the same plan."
    },
    {
      "id": "s-sl-08",
      "category": "Owner Selling (House/Apt)",
      "title": "8 · Past experience",
      "body": "Has the property been listed before, with an agent or on your own? What happened?\n\nAnd if you could change one thing about how it was handled, what would it be? That tells me what to get right for you. If this is your first time selling it, simply say so and we'll start fresh."
    },
    {
      "id": "s-sl-09",
      "category": "Owner Selling (House/Apt)",
      "title": "9 · Book a visit",
      "body": "Thank you for sharing all that, {Name}. The natural next step is a short visit, so I can see the property and walk you through how we would present and market it. You can then decide whether it feels right.\n\nWhich day and time would suit you this week?"
    },
    {
      "id": "s-sl-10",
      "category": "Owner Selling (House/Apt)",
      "title": "10 · Confirm visit",
      "body": "Confirmed, {Name}. I will see you at the {Property} on {Date} at {Time}.\n\nIf convenient, please keep copies of the deed and survey plan ready. If you don't have them to hand, that's fine.\n\nWho will be there on the day, and is there anything I should know about access or parking?"
    },
    {
      "id": "s-sl-11",
      "category": "Owner Selling (House/Apt)",
      "title": "11 · Proposal after visit",
      "body": "Thank you for your time, {Name}. Here is the plan I suggest for the {Property}:\n\n• Suggested asking price: {Price}, with my reasoning for us to discuss\n• Professional photos and video\n• One consistent listing, so the property is presented clearly\n• Buyers qualified before viewings (budget, funding, timeline)\n• Viewings handled by us\n• Negotiation and paperwork support\n• Regular updates\n\nTerms: {Fee terms}\n{Recent result}\n\nShall we go ahead?\n\n{MyName}\n{Company}"
    },
    {
      "id": "s-sl-12",
      "category": "Owner Selling (House/Apt)",
      "title": "12 · Proposal follow-up",
      "body": "Hi {Name}, I'm checking in on the proposal I sent for the {Property}. It's a big decision, and it's natural to want time, or to talk it over with family.\n\nIs there anything you would like me to clarify, such as the price, the terms or how we would handle viewings? A short call would also work, whenever it suits you."
    },
    {
      "id": "s-sl-13",
      "category": "Owner Selling (House/Apt)",
      "title": "13 · Documents & access",
      "body": "Thank you, {Name}. To get started, these will help:\n\n• Deed (a copy is fine)\n• Survey plan\n• Approvals or COC, if available\n• A recent utility bill\n• Key and access arrangements\n• Days that suit you for viewings\n\nSend what you have for now, and we can add the rest as we go. Which day would suit you for the photo shoot?"
    },
    {
      "id": "s-sl-14",
      "category": "Owner Selling (House/Apt)",
      "title": "14 · Listing is live",
      "body": "Hi {Name}, your {Property} is now live: {Link}\n\nFrom here, we respond to every enquiry, check the buyer's position, and only then arrange a viewing, so you are not disturbed unnecessarily. I will send you an update every week, and sooner if anything important comes in.\n\nDoes everything in the listing look right to you?"
    },
    {
      "id": "s-sl-15",
      "category": "Owner Selling (House/Apt)",
      "title": "15 · Weekly update",
      "body": "Hi {Name}, here is this week's update on the {Property}:\n\n• Enquiries: {Enquiries}\n• Viewings: {Viewings}\n• Buyer feedback: {Feedback}\n\nNext, we will follow up with those who have shown interest and arrange further viewings.\n\nIs there anything you would like us to adjust?"
    },
    {
      "id": "s-sl-16",
      "category": "Owner Selling (House/Apt)",
      "title": "16 · Viewing request",
      "body": "Hi {Name}, a buyer would like to view the {Property} on {Date} at {Time}.\n\nI have already spoken with them and checked their budget and funding, and I will be there throughout.\n\nWould that time suit you, and can someone give us access?"
    },
    {
      "id": "s-sl-17",
      "category": "Owner Selling (House/Apt)",
      "title": "17 · Viewing feedback",
      "body": "Hi {Name}, we had a viewing at the {Property} today. In short, the feedback was:\n\n{Feedback}\n\nFeedback like this is useful, because it shows what buyers notice. I will share my view on what it means, and the next step I would suggest, when we speak.\n\nWould a short call this week suit you?"
    },
    {
      "id": "s-sl-18",
      "category": "Owner Selling (House/Apt)",
      "title": "18 · Offer received",
      "body": "Hi {Name}, we have received an offer on the {Property}.\n\n*Offer:* {Offer}\n*Terms:* {Buyer terms}\n\nMy view in one line: it deserves careful thought, because the terms matter as much as the figure. You have three options: accept, counter, or hold for now.\n\nI'd recommend we talk it through before replying. When are you free for a short call?"
    },
    {
      "id": "s-sl-19",
      "category": "Owner Selling (House/Apt)",
      "title": "19 · Price review",
      "body": "Hi {Name}, it has been a few weeks since we listed the {Property}, so I would like us to review where we stand.\n\nHere is what the market is telling us: {Enquiries} enquiries, {Viewings} viewings, and this feedback: {Feedback}\n\nWe have three options: adjust the price, improve the presentation, or hold for now. Each is reasonable, and the decision is yours. Could we speak this week to go through them?"
    },
    {
      "id": "s-sl-20",
      "category": "Owner Selling (House/Apt)",
      "title": "20 · Sale agreed - next steps",
      "body": "Congratulations, {Name}. We have an agreed sale on the {Property}.\n\nHere is what happens next:\n• The sale agreement and advance\n• Lawyers check the deed\n• We agree the timeline to transfer\n• Handover of the property\n\nWe will coordinate each step and keep you updated. Shall we speak tomorrow to confirm the timeline?"
    },
    {
      "id": "s-sl-21",
      "category": "Owner Selling (House/Apt)",
      "title": "21 · Thank you + referral",
      "body": "Thank you, {Name}. It was a pleasure working with you on the {Property}.\n\nDo you know anyone who is buying, selling or renting in Colombo? I would be glad to help them in the same way. And if you ever need anything, please message me anytime."
    },
    {
      "id": "s-sl-22",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · Your fee is too high",
      "body": "I understand, {Name}, and it's right to ask. The fee covers professional presentation, buyers checked before they view, negotiation that protects your price, and the paperwork through to handover.\n\nWhich part of the service matters most to you?"
    },
    {
      "id": "s-sl-23",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · I'll sell it myself",
      "body": "That's completely fair, and many owners start that way. What they often find hard is screening callers, viewings at odd hours, negotiating directly, and the paperwork.\n\nI can help with only the parts you want, or simply stay in touch. Would it be useful if I checked back in a few weeks?"
    },
    {
      "id": "s-sl-24",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · I've given it to many agents",
      "body": "Thank you for telling me, and I'm not criticising anyone. When a property is with many agents, buyers can see it at different prices in different places, and that often makes them doubt it and negotiate harder.\n\nOne well-managed listing with one price can look stronger. Would you consider that with us for an agreed period?"
    },
    {
      "id": "s-sl-25",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · Why exclusive?",
      "body": "A fair question. With one listing there is one price and one standard of presentation, and we put our full effort and spend behind it. You also know exactly who is accountable.\n\nWe agree the period together, and you can end it if we don't perform. Does that seem fair?"
    },
    {
      "id": "s-sl-26",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · Another agent quoted higher",
      "body": "That may well be possible. A high quote can win a listing, but only the buyer decides the price.\n\nWe can let the market guide us, with a review date agreed up front. May I show you what similar properties are really selling for?"
    },
    {
      "id": "s-sl-27",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · Just send me buyers",
      "body": "Happy to introduce buyers. We qualify them first, and we agree basic terms with you so that both sides are protected.\n\nA simple written agreement is enough. Shall I send one over for you to review?"
    },
    {
      "id": "s-sl-28",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · Need to talk to family",
      "body": "Of course. It is an important decision, and everyone should feel comfortable.\n\nWould a short call with all the decision makers help? I can explain how we would work once and answer everyone's questions. When would suit the family?"
    },
    {
      "id": "s-sl-29",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · Not in a hurry / testing the market",
      "body": "That's perfectly fine, there is no need to rush. If the right offer came along, what price would make you decide to move now?\n\nOne option is a quiet, discreet listing, shared only with buyers we already know, so the property is not over-exposed. Would that suit you?"
    },
    {
      "id": "s-sl-30",
      "category": "Owner Selling (House/Apt)",
      "title": "Q · I want a higher price",
      "body": "I understand, and it is your property to price. We can start where you are comfortable and agree a review point together.\n\nI would only add that buyers compare it with similar properties on the market. May I show you how it sits against those?"
    },
    {
      "id": "s-ll-01",
      "category": "Landlord Renting (House/Apt)",
      "title": "1 · Reply to landlord enquiry",
      "body": "Hi {Name}, thank you for reaching out. This is {MyName} from {Company}.\n\nI'd be glad to help you rent your property. May I ask a couple of quick things?\n\n• Is it a house or an apartment, and where is it?\n• When will it be available?"
    },
    {
      "id": "s-ll-02",
      "category": "Landlord Renting (House/Apt)",
      "title": "2 · Outreach to owner's rental ad",
      "body": "Hi {Name}, this is {MyName} from {Company}. I saw your advertisement for the {Property}.\n\nWe work with expat, diplomatic and corporate tenants who are looking in {Area}.\n\nWould you be open to us introducing suitable, screened tenants? There is no obligation at all."
    },
    {
      "id": "s-ll-03",
      "category": "Landlord Renting (House/Apt)",
      "title": "3 · Follow-up (no reply)",
      "body": "Hi {Name}, I wrote a few days ago about your {Property}. Is it still available for rent?\n\nIf you have already found a tenant, congratulations, and I will leave it with you."
    },
    {
      "id": "s-ll-04",
      "category": "Landlord Renting (House/Apt)",
      "title": "4 · Property basics",
      "body": "Thank you, {Name}. To describe the property properly, may I ask a few things?\n\n• How many bedrooms and bathrooms does it have?\n• Is it furnished, semi-furnished or unfurnished?\n• Is there parking and air conditioning?\n• What backup power and water supply is there?\n• From what date is it available?\n\nA short voice note is fine too."
    },
    {
      "id": "s-ll-05",
      "category": "Landlord Renting (House/Apt)",
      "title": "5 · Rent & terms",
      "body": "Thank you, {Name}. May I ask what monthly rent you have in mind, and how you arrived at that figure?\n\nAnd what advance and lease period would you prefer? Many expat and corporate tenants look for flexible terms, so it helps to know where you're comfortable."
    },
    {
      "id": "s-ll-06",
      "category": "Landlord Renting (House/Apt)",
      "title": "6 · Tenant preference",
      "body": "That's helpful, {Name}. What kind of tenant would you be most comfortable with, such as a family, a professional, a company or an embassy? And are there any rules we should know about, like pets?\n\nPlease also tell me how involved you would like to be. Some owners prefer to leave everything to us, and others like to approve each step."
    },
    {
      "id": "s-ll-07",
      "category": "Landlord Renting (House/Apt)",
      "title": "7 · Vacancy cost",
      "body": "May I ask how long the property has been vacant, or when your last tenant left?\n\nEvery empty month is a month of rent not earned, so it helps to know what matters more to you right now: letting it quickly, or holding out for the highest rent?"
    },
    {
      "id": "s-ll-08",
      "category": "Landlord Renting (House/Apt)",
      "title": "8 · Book a visit / photos",
      "body": "Thank you, {Name}. I would like to visit the property, see it for myself and take proper photos, so it is presented well to tenants. The visit should be short.\n\nWhich day and time would suit you?"
    },
    {
      "id": "s-ll-09",
      "category": "Landlord Renting (House/Apt)",
      "title": "9 · Confirm visit",
      "body": "Confirmed, {Name}. I will see you at the {Property} on {Date} at {Time}.\n\nWho will be meeting me there, and will we have keys for all the rooms? If the lights, AC and water are on, the photos will turn out better."
    },
    {
      "id": "s-ll-10",
      "category": "Landlord Renting (House/Apt)",
      "title": "10 · Proposal / terms",
      "body": "Thank you for your time, {Name}. Here is the plan I suggest for renting the {Property}:\n\n• Suggested rent: {Rent}, with my reasoning for us to discuss\n• Proper photos and a clear listing\n• Tenants screened first: employer, references and ability to pay the advance\n• Viewings handled by us\n• Lease agreement support\n• Inventory and handover\n\nTerms: {Fee terms}\n{Recent result}\n\nShall we go ahead?\n\n{MyName}\n{Company}"
    },
    {
      "id": "s-ll-11",
      "category": "Landlord Renting (House/Apt)",
      "title": "11 · Listing checklist",
      "body": "To get the listing ready, these will help:\n\n• Keys and access arrangements\n• Inventory list (furniture and appliances)\n• Recent utility bills\n• Meter numbers\n• House rules, if any\n• Times that suit you for viewings\n\nSend what you have for now. Shall I go through the inventory with you at the property?"
    },
    {
      "id": "s-ll-12",
      "category": "Landlord Renting (House/Apt)",
      "title": "12 · Listing is live",
      "body": "Hi {Name}, your {Property} is now live: {Link}\n\nFrom here, we screen every enquiry, and only suitable tenants will be brought to view. I will send you an update every week.\n\nDoes everything in the listing look right to you?"
    },
    {
      "id": "s-ll-13",
      "category": "Landlord Renting (House/Apt)",
      "title": "13 · Weekly update",
      "body": "Hi {Name}, here is this week's update on the {Property}:\n\n• Enquiries: {Enquiries}\n• Viewings: {Viewings}\n• Tenant feedback: {Feedback}\n\nNext, we will follow up with those who have shown interest and keep screening new enquiries.\n\nIs there anything you would like us to adjust?"
    },
    {
      "id": "s-ll-14",
      "category": "Landlord Renting (House/Apt)",
      "title": "14 · Viewing request",
      "body": "Hi {Name}, a screened tenant would like to view the {Property} on {Date} at {Time}.\n\nWe have spoken with them and checked the basics beforehand, and I will be there throughout.\n\nWould that time suit you, and can someone give us access?"
    },
    {
      "id": "s-ll-15",
      "category": "Landlord Renting (House/Apt)",
      "title": "15 · Tenant found - for approval",
      "body": "Hi {Name}, we have found a tenant for the {Property}, and I would like your approval.\n\n*Tenant:* {Tenant profile}\n*Rent:* {Rent}\n*Advance:* {Advance}\n*Lease:* {Lease term}\n*Move-in:* {Move-in date}\n\nMy view: this looks like a sound match for the property, and I am comfortable recommending it.\n\nShall I proceed?"
    },
    {
      "id": "s-ll-16",
      "category": "Landlord Renting (House/Apt)",
      "title": "16 · Lease & handover",
      "body": "Thank you, {Name}. Here is what happens next:\n\n• We prepare the lease agreement draft for your review\n• The advance and deposit are received, with a receipt\n• The inventory is signed off, with photos\n• Meter readings are recorded\n• Keys are handed over\n\nWe will coordinate each step and keep you updated. Shall I send you the draft lease first?"
    },
    {
      "id": "s-ll-17",
      "category": "Landlord Renting (House/Apt)",
      "title": "17 · Offer tenancy management",
      "body": "Now that the property is let, {Name}, there is an optional service I'd like you to know about: tenancy management.\n\n• Rent follow-up\n• Maintenance coordination\n• Tenant communication\n• Periodic inspection\n• A monthly report\n\nThe fee is {Management fee}. Would that be useful to you?"
    },
    {
      "id": "s-ll-18",
      "category": "Landlord Renting (House/Apt)",
      "title": "18 · Renewal reminder",
      "body": "Hi {Name}, the lease on the {Property} ends in a few months, so it is a good time to plan.\n\nYou can renew with the same tenant, or re-let the property. We can handle either. Which would you prefer?"
    },
    {
      "id": "s-ll-19",
      "category": "Landlord Renting (House/Apt)",
      "title": "19 · Thank you + referral",
      "body": "Thank you, {Name}. It was a pleasure working with you on the {Property}.\n\nDo you know anyone who is buying, selling or renting in Colombo? I would be glad to help them in the same way. And if you ever need anything, please message me anytime."
    },
    {
      "id": "s-ll-20",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · I'll find a tenant myself",
      "body": "That's fair, and some owners do it well. What they often find hard is screening applicants, checking an employer and ability to pay, preparing the lease, and settling inventory disagreements later.\n\nIf you prefer, I can help with only the screening and the lease. Would that be useful?"
    },
    {
      "id": "s-ll-21",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · Your fee is too high",
      "body": "I understand. The fee covers finding the right tenant, protecting your property, a lease and handover done properly, and keeping empty months short.\n\nMany owners find a reliable tenant matters more than the saving. Which part of the service matters most to you?"
    },
    {
      "id": "s-ll-22",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · I've given it to many agents",
      "body": "Thank you for telling me, and I'm not criticising anyone. When a property is with many agents, tenants can see it at different rents in different places, which can confuse them and weaken your position.\n\nOne well-presented listing can look stronger. Would you consider that with us for an agreed period?"
    },
    {
      "id": "s-ll-23",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · I want one year advance",
      "body": "I understand, and wanting that security makes sense. Many quality tenants, especially expat and corporate ones, prefer shorter advances, and may choose another home if the advance is too long.\n\nThere are two options: a shorter advance with a deposit, or a company lease. Which would you consider?"
    },
    {
      "id": "s-ll-24",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · My rent is higher than offers",
      "body": "I understand, and you know your property well. There are three options: hold and wait, make a small adjustment, or add value, such as furnishing or repairs.\n\nHow long are you prepared to wait for the right tenant?"
    },
    {
      "id": "s-ll-25",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · Worried about damage",
      "body": "That is a sensible concern. We screen tenants, take a deposit, prepare a detailed inventory with photos, and, with our management service, inspect the property periodically.\n\nDid you have a difficult experience before?"
    },
    {
      "id": "s-ll-26",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · Just send me tenants",
      "body": "Happy to. We screen tenants first, and then agree terms with you in a simple written agreement, so both sides are protected.\n\nShall I send one over for you to review?"
    },
    {
      "id": "s-ll-27",
      "category": "Landlord Renting (House/Apt)",
      "title": "Q · Can you manage it for me?",
      "body": "Yes, we can. We follow up the rent, coordinate maintenance, stay in touch with the tenant, inspect periodically and send you a monthly report.\n\nThe fee is {Management fee}. When does the lease start?"
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
    },
    {
      id: "s-f-c3", title: "Col 3 House 175Mn",
      steps: [
        {
          id: "s-f-c3-1", title: "Opener",
          say: "Hi, this is {MyName} from {Company}. You enquired about the 4-bedroom house in Kollupitiya, Colombo 3, listed at 175 million. Is now a good time to talk for a few minutes?",
          notes: "If it's a bad time, agree a specific call-back time."
        },
        {
          id: "s-f-c3-2", title: "Buyer or agent",
          say: "May I ask, are you looking for yourself or your family, or for a client?",
          notes: "Agent: ask if they have a specific buyer, if the buyer has seen price and photos, and if the buyer will attend. Confirm co-broking and commission terms before giving access."
        },
        {
          id: "s-f-c3-3", title: "Location & budget",
          say: "Does Kollupitiya suit you as a location? And is 175 million within the range you're comfortable with?",
          notes: "If the budget is lower, ask their range and offer to find other options. Don't argue the price."
        },
        {
          id: "s-f-c3-4", title: "Requirements",
          say: "What are the main things you need in a house? Bedrooms, parking, space for family?",
          notes: "Key features: 8.3 perches, approx. 4,500 sq.ft, 2 storeys, 4 bed / 4 bath, parking for 2, laundry, 2 balconies, backyard. Off Galle Road, access from Galle Road and Marine Drive."
        },
        {
          id: "s-f-c3-5", title: "Timing & funding",
          say: "When are you hoping to buy? And will it be your own funds, a bank loan, or from selling another property?",
          notes: "Strongest signals: clear budget, funding plan, and timeline. Selling first? Offer to help sell theirs too."
        },
        {
          id: "s-f-c3-6", title: "Who decides",
          say: "Will anyone else be part of the decision? It's best if they can join the viewing too.",
          notes: "Aim to get all decision makers at the same viewing."
        },
        {
          id: "s-f-c3-7", title: "Book the viewing",
          say: "From what you've told me, it's worth seeing in person. Which day and time suits you? I'll confirm with the owner and send you the location on WhatsApp.",
          notes: "End with a clear next step: viewing booked, one detail to resolve, follow-up date, or not a fit. Don't promise anything not yet confirmed (availability, documents, furniture, negotiability)."
        }
      ]
    },
    {
      "id": "s-f-c5",
      "title": "Col 5 Siripa Lane",
      "steps": [
        {
          "id": "s-f-c5-1",
          "title": "Opener",
          "say": "Hi, this is {MyName} from {Company}. You enquired about the house on Siripa Lane, Colombo 5, on 32 perches. Is now a good time to talk for a few minutes?",
          "notes": "If it's a bad time, agree a specific call-back time."
        },
        {
          "id": "s-f-c5-2",
          "title": "Buyer or agent",
          "say": "May I ask, are you looking for yourself or your family, or for a client?",
          "notes": "Agent: ask if they have a specific buyer, if the buyer has seen the details, and if the buyer will attend. Confirm co-broking and commission terms before giving access."
        },
        {
          "id": "s-f-c5-3",
          "title": "Home or investment",
          "say": "Are you looking for a home to live in, or more as an investment?",
          "notes": "Don't claim development potential. Zoning and approvals are not confirmed. If they want to build, offer to check which documents the owner can share."
        },
        {
          "id": "s-f-c5-4",
          "title": "Location & budget",
          "say": "Does Colombo 5 suit you? And may I ask what budget range you have in mind?",
          "notes": "Price is quoted for the whole property, house and land together. Avoid talking per perch. If they push per perch, say it's a house with a garden, not bare land, and steer to a viewing."
        },
        {
          "id": "s-f-c5-5",
          "title": "Timing & funding",
          "say": "When are you hoping to buy? And will it be your own funds, a bank loan, or from selling another property?",
          "notes": "Strongest signals: clear budget, funding plan, and timeline. Selling first? Offer to help sell theirs too."
        },
        {
          "id": "s-f-c5-6",
          "title": "Who decides",
          "say": "Will anyone else be part of the decision? It's best if they can join the viewing too.",
          "notes": "Aim to get all decision makers at the same viewing."
        },
        {
          "id": "s-f-c5-7",
          "title": "Book the viewing",
          "say": "From what you've told me, it's worth seeing in person. Which day and time suits you? I'll confirm with the owner and send you the location on WhatsApp.",
          "notes": "House details (bedrooms, floor area, condition, documents) are still being confirmed. Say \"I'll check with the owner\" rather than guessing. End with a clear next step."
        }
      ]
    },
    {
      "id": "s-f-sell",
      "title": "Owner Selling Call",
      "steps": [
        {
          "id": "s-f-sell-1",
          "title": "Connect & permission",
          "say": "Hello {Name}, this is {MyName} from {Company}. I'm calling about the sale of your property. Is now a good time for a few minutes?",
          "notes": "Slow down and smile. If it is a bad time, agree a specific call-back time before you hang up. Listen to the tone: curious and open, or guarded?"
        },
        {
          "id": "s-f-sell-2",
          "title": "Situation",
          "say": "Tell me a little about the property. Is it a house or an apartment, and how big is it? What condition is it in, and is it lived in or empty?",
          "notes": "Note bedrooms, land in perches or floor area, parking, renovations, furnished or not. If a tenant is living there, viewings need their cooperation. Do not talk price yet."
        },
        {
          "id": "s-f-sell-3",
          "title": "Motivation",
          "say": "What has led you to think about selling, and why now?",
          "notes": "Motivation is the first thing to qualify. Strong reasons: relocation, family or estate matters, funds needed, upgrading. \"Just testing the market\" means low urgency. Let them talk, then repeat back what you heard."
        },
        {
          "id": "s-f-sell-4",
          "title": "Consequence & timeline",
          "say": "Ideally, when would you like the sale completed? And if it took longer than that, what would it mean for you?",
          "notes": "Listen for a real deadline (move abroad, school year, loan, estate) versus a flexible wish. A real consequence means they will act. No consequence and no date means a slow listing."
        },
        {
          "id": "s-f-sell-5",
          "title": "Price & how they arrived",
          "say": "Do you have a price in mind? And how did you arrive at that figure?",
          "notes": "Listen for the source: a valuation, similar sales, a neighbour's price, or a hope. Do not agree or disagree yet. Red flag: an unrealistic price with no urgency. Say you will give an honest view based on what is selling."
        },
        {
          "id": "s-f-sell-6",
          "title": "Past experience & decision makers",
          "say": "Has the property been listed before, and how did that go? And is anyone else involved in the decision, such as co-owners or family abroad?",
          "notes": "Past listings with many agents often explain a stale price. Never criticise another agent. Authority: everyone who must sign should hear the plan, so invite them to the visit or a video call."
        },
        {
          "id": "s-f-sell-7",
          "title": "How we would sell it",
          "say": "What we would do is create one clear listing with professional photos, check each buyer's position before any viewing, and handle viewings and negotiation for you. Would that help with what you've told me?",
          "notes": "Keep it under thirty seconds. No statistics, no promises on price or speed. If they ask about the fee, say we will go through terms in the proposal after the visit."
        },
        {
          "id": "s-f-sell-8",
          "title": "Commitment",
          "say": "The next step is a short visit, so I can see the property and show you how we would present it. Which day and time would suit you?",
          "notes": "Offer two options and book it on the call. Send the confirmation message straight after. If they hesitate, ask \"What would you need to see to feel comfortable?\" If there is no urgency and an unrealistic price, offer a call to review in a few weeks instead of taking the listing."
        }
      ]
    },
    {
      "id": "s-f-let",
      "title": "Landlord Renting Call",
      "steps": [
        {
          "id": "s-f-let-1",
          "title": "Connect & permission",
          "say": "Hello {Name}, this is {MyName} from {Company}. I'm calling about renting out your property. Is now a good time for a few minutes?",
          "notes": "Slow down and smile. If it is a bad time, agree a call-back time. Note whether they sound open to an agent or protective of the property."
        },
        {
          "id": "s-f-let-2",
          "title": "Property & availability",
          "say": "Tell me about the property. Is it a house or an apartment, and where is it? How many bedrooms, and is it furnished? When will it be available?",
          "notes": "Note bedrooms, bathrooms, furnished level, parking, AC, backup power and water. Is it vacant now, or is a tenant leaving? Ask about the condition."
        },
        {
          "id": "s-f-let-3",
          "title": "Rent & how they arrived",
          "say": "What monthly rent do you have in mind, and how did you arrive at that figure?",
          "notes": "Listen for the source: a previous tenant, a neighbour's rent, or an online ad. Do not argue the figure. Say you will give an honest view based on what tenants are looking for in the area."
        },
        {
          "id": "s-f-let-4",
          "title": "Terms",
          "say": "What advance and lease period would you prefer? Many expat and corporate tenants look for flexible terms, so it helps to know where you are comfortable.",
          "notes": "Owners often ask for a long advance plus a deposit. Expat, diplomatic and corporate tenants usually prefer shorter advances. Do not push yet. Note how firm they are and why."
        },
        {
          "id": "s-f-let-5",
          "title": "Tenant preference",
          "say": "What kind of tenant would you be most comfortable with? And are there any rules, like pets?",
          "notes": "Family, professional, company or embassy. Note pets, smoking and any house rules. Also ask how involved they want to be day to day."
        },
        {
          "id": "s-f-let-6",
          "title": "Vacancy consequence & priority",
          "say": "How long has it been vacant? Every empty month is a month of rent not earned, so what matters more to you right now: letting it quickly, or the highest rent?",
          "notes": "Their answer sets the strategy. Speed means flexible on rent and terms. Highest rent means patience and a better-presented property. Do not judge either choice."
        },
        {
          "id": "s-f-let-7",
          "title": "How we would let it",
          "say": "We would take proper photos, screen tenants for employer, references and ability to pay, handle the viewings, and help with the lease and handover. If you want, we can also manage the tenancy afterwards. Would that help?",
          "notes": "Keep it short. Mention management only as an option. No promises on speed or rent. If they ask about the fee, say we will go through terms in the proposal after the visit."
        },
        {
          "id": "s-f-let-8",
          "title": "Commitment",
          "say": "The next step is a short visit, so I can see the property and take proper photos. Which day and time would suit you?",
          "notes": "Offer two options and book it on the call. Send the confirmation message straight after. If they hesitate, ask what would need to be true for them to feel comfortable. Red flag: a rent far above the market with no urgency."
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
    },
    {
      "id": "s-os-01",
      "category": "Sellers",
      "title": "Your fee is too high for a sale.",
      "answer": "I understand, and it's right to question it. The fee pays for professional presentation, buyers checked before they view, negotiation that protects your price, and the paperwork through to handover. Which part of that matters most to you?"
    },
    {
      "id": "s-os-02",
      "category": "Sellers",
      "title": "I'll sell it myself.",
      "answer": "That's completely reasonable, and many owners try. The parts they usually find hardest are screening callers, viewings at odd hours, negotiating directly and the paperwork. I can help with only the parts you want, or simply stay in touch. Would it be useful if I checked back in a few weeks?"
    },
    {
      "id": "s-os-03",
      "category": "Sellers",
      "title": "I've already given it to many agents.",
      "answer": "Thank you for telling me, and I'm not criticising anyone. When a property is with many agents, buyers often see it at different prices in different places, and that can make them doubt it and negotiate harder. One well-managed listing with one price can look stronger. Would you consider that with us for an agreed period?"
    },
    {
      "id": "s-os-04",
      "category": "Sellers",
      "title": "Why does it have to be exclusive?",
      "answer": "Because it lets us put our full effort and spend behind one clear listing, with one price and one standard of presentation. You also know exactly who is accountable. We agree the period together, and you can end it if we don't perform. Does that seem fair to you?"
    },
    {
      "id": "s-os-05",
      "category": "Sellers",
      "title": "Someone else quoted me a higher figure.",
      "answer": "That may be possible, and I wouldn't want to talk you down. A high quote can win a listing, but only a buyer confirms the price. Shall I show you what similar properties are really selling for, so we can set a figure and a review date together?"
    },
    {
      "id": "s-os-06",
      "category": "Sellers",
      "title": "I need to talk to my family first.",
      "answer": "Of course, a decision like this should involve everyone. Would a short call with all the decision makers help? I can explain how we would work once and answer everyone's questions. When would suit you all?"
    },
    {
      "id": "s-ol-01",
      "category": "Landlords",
      "title": "I'll find a tenant myself.",
      "answer": "That's fair, and some owners do it well. The hard parts are usually screening applicants, checking an employer and ability to pay, and settling inventory disagreements later. I can help with just the screening and the lease if you prefer. Would that be useful?"
    },
    {
      "id": "s-ol-02",
      "category": "Landlords",
      "title": "Your fee is too high for a rental.",
      "answer": "I understand. The fee covers finding the right tenant, protecting your property, a proper lease and handover, and keeping empty months short. Many owners find a reliable tenant matters more than the saving. Which part of that matters most to you?"
    },
    {
      "id": "s-ol-03",
      "category": "Landlords",
      "title": "I want one year's advance.",
      "answer": "I understand, and wanting that security makes sense. Many quality tenants, especially expat and corporate ones, prefer shorter advances, and may simply choose another home. We could look at a shorter advance with a deposit, or a company lease. Which would you consider?"
    },
    {
      "id": "s-ol-04",
      "category": "Landlords",
      "title": "My rent is higher than the offers.",
      "answer": "I understand, and you know your property well. We can hold and wait, make a small adjustment, or add value, such as furnishing or repairs. Each is reasonable. How long are you prepared to wait for the right tenant?"
    },
    {
      "id": "s-ol-05",
      "category": "Landlords",
      "title": "I'm worried about damage.",
      "answer": "That's a sensible concern. We screen tenants, take a deposit, prepare a detailed inventory with photos, and with our management service we inspect the property periodically. Did you have a difficult experience before?"
    },
    {
      "id": "s-ol-06",
      "category": "Landlords",
      "title": "I've already given it to many agents.",
      "answer": "Thank you for telling me, and I'm not criticising anyone. When a property is with many agents, tenants can see it at different rents in different places, which can confuse them and weaken your position. One well-presented listing can look stronger. Would you consider that with us for an agreed period?"
    }
  ]
};
