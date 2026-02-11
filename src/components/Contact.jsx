"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  Calendar as CalendarIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Contact = () => {
  // Date Logic
  const { language, direction } = useLanguage();
  const t = translations[language].contact;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState(30);
  const [countryCode, setCountryCode] = useState("+1");
  const [category, setCategory] = useState(t.categories.general);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [feedback, setFeedback] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeFeedback = () => setFeedback({ ...feedback, show: false });

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();
  const monthName = new Intl.DateTimeFormat(language, {
    month: "long",
    year: "numeric",
  }).format(currentDate);

  // Get localized day names
  const getDayNames = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(2024, 0, i); // Jan 2024 starts on Sunday? Wait, Jan 1 2024 was Monday. Jan 7 2024 is Sunday.
      // Actually, best way is to pick a known Sunday. Jan 7, 2024 is Sunday.
      const date = new Date(2024, 0, 7 + i); // Start from Sunday
      days.push(
        new Intl.DateTimeFormat(language, { weekday: "short" }).format(date),
      );
    }
    return days;
  };
  const dayNames = getDayNames();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Prevent duplicate sends
    if (isSubmitting) return;

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !selectedDate ||
      !selectedTime
    ) {
      setFeedback({
        show: true,
        type: "error",
        message: t.errorDetails || "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // --- EMAILJS CONFIGURATION ---
    // Please replace these with your actual IDs from emailjs.com
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    // -----------------------------

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: `${countryCode} ${formData.phone}`,
      category: category,
      duration: duration,
      date: `${monthName.split(" ")[0]} ${selectedDate}`,
      time: selectedTime,
      timeZone: timeZone,
      to_email: "info@axorakitchens.com", // You can also set this in the EmailJS dashboard
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        // Show Success
        setFeedback({
          show: true,
          type: "success",
          message: t.successMessage || "Your request has been sent successfully! We will contact you soon.",
        });

        // Reset Form
        setFormData({ fullName: "", email: "", phone: "" });
        setSelectedDate(null);
        setSelectedTime(null);
        setCategory(t.categories.general);
        setDuration(30);
      } else {
        const errorData = await response.text();
        throw new Error(errorData || "Failed to send email.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Fallback to mailto if EmailJS is not configured or fails
      if (SERVICE_ID === "YOUR_SERVICE_ID") {
        const subject = `Meeting Request – AxoraKitchens Studio`;
        const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${countryCode} ${formData.phone}\nDate: ${monthName.split(" ")[0]} ${selectedDate}\nTime: ${selectedTime}`;
        window.location.href = `mailto:info@axorakitchens.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFeedback({
          show: true,
          type: "success",
          message: "Opening your email client to send the request...",
        });
      } else {
        setFeedback({
          show: true,
          type: "error",
          message: "Sorry, something went wrong. Please try again or call us directly.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-bg-secondary text-text-main" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-3 text-text-main">
            {t.title}
          </h2>
          <p className="text-text-muted text-lg">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-bg-primary rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
        >
          {/* Left Panel: Info & Form */}
          <div className="lg:w-1/3 p-8 border-r border-border flex flex-col bg-bg-secondary/30">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-main mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-bg-primary text-xs font-bold">
                  A
                </span>
                {t.studio}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-text-muted">
                  <Clock className="w-5 h-5 mt-0.5 text-text-muted" />
                  <div>
                    <p className="font-medium">{t.duration}</p>
                    <div className="flex gap-2 mt-2">
                      {[30, 45, 60].map((mins) => (
                        <button
                          key={mins}
                          onClick={() => setDuration(mins)}
                          className={`text-xs px-2 py-1 rounded border transition-colors ${duration === mins ? "bg-text-main text-bg-primary border-text-main" : "bg-bg-primary border-border hover:border-text-muted text-text-main"}`}
                        >
                          {mins}m
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-text-muted">
                  <Clock className="w-5 h-5 mt-0.5 text-text-muted" />
                  <p className="text-sm pt-0.5">{t.type}</p>
                </div>
                {/* Added Contact Details */}
                <div className="flex items-start gap-4 text-text-muted">
                  <Mail className="w-5 h-5 mt-0.5 text-text-muted" />
                  <div>
                    <p className="font-medium">{t.emailLabel}</p>
                    <p className="text-sm">contact@axorakitchens.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-text-muted">
                  <Phone className="w-5 h-5 mt-0.5 text-text-muted" />
                  <div>
                    <p className="font-medium">{t.callLabel}</p>
                    <p className="text-sm"> +968 95554577 </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-border">
              <h4 className="text-sm font-semibold text-text-muted mb-4">
                {t.yourDetails}
              </h4>
              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-border rounded-md focus:ring-1 focus:ring-text-main focus:border-text-main outline-none bg-bg-primary text-text-main"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-border rounded-md focus:ring-1 focus:ring-text-main focus:border-text-main outline-none bg-bg-primary text-text-main"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <div className="w-[120px]">
                    <label className="block text-xs font-medium text-text-muted mb-1">
                      {t.code}
                    </label>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className={`w-full px-2 py-2 text-sm border border-border rounded-md focus:ring-1 focus:ring-text-main outline-none bg-bg-primary text-text-main font-mono ${direction === "rtl" ? "text-end" : ""}`}
                    >
                      <option value="+93">🇦🇫 +93</option>
                      <option value="+355">🇦🇱 +355</option>
                      <option value="+213">🇩🇿 +213</option>
                      <option value="+1684">🇦🇸 +1684</option>
                      <option value="+376">🇦🇩 +376</option>
                      <option value="+244">🇦🇴 +244</option>
                      <option value="+1264">🇦🇮 +1264</option>
                      <option value="+672">🇦🇶 +672</option>
                      <option value="+1268">🇦🇬 +1268</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+374">🇦🇲 +374</option>
                      <option value="+297">🇦🇼 +297</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+43">🇦🇹 +43</option>
                      <option value="+994">🇦🇿 +994</option>
                      <option value="+1242">🇧🇸 +1242</option>
                      <option value="+973">🇧🇭 +973</option>
                      <option value="+880">🇧🇩 +880</option>
                      <option value="+1246">🇧🇧 +1246</option>
                      <option value="+375">🇧🇾 +375</option>
                      <option value="+32">🇧🇪 +32</option>
                      <option value="+501">🇧🇿 +501</option>
                      <option value="+229">🇧🇯 +229</option>
                      <option value="+1441">🇧🇲 +1441</option>
                      <option value="+975">🇧🇹 +975</option>
                      <option value="+591">🇧🇴 +591</option>
                      <option value="+387">🇧🇦 +387</option>
                      <option value="+267">🇧🇼 +267</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+246">🇮🇴 +246</option>
                      <option value="+673">🇧🇳 +673</option>
                      <option value="+359">🇧🇬 +359</option>
                      <option value="+226">🇧🇫 +226</option>
                      <option value="+257">🇧🇮 +257</option>
                      <option value="+855">🇰🇭 +855</option>
                      <option value="+237">🇨🇲 +237</option>
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+238">🇨🇻 +238</option>
                      <option value="+1345">🇰🇾 +1345</option>
                      <option value="+236">🇨🇫 +236</option>
                      <option value="+235">🇹🇩 +235</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+61">🇨🇽 +61</option>
                      <option value="+61">🇨🇨 +61</option>
                      <option value="+57">🇨🇴 +57</option>
                      <option value="+269">🇰🇲 +269</option>
                      <option value="+242">🇨🇬 +242</option>
                      <option value="+243">🇨🇩 +243</option>
                      <option value="+682">🇨🇰 +682</option>
                      <option value="+506">🇨🇷 +506</option>
                      <option value="+385">🇭🇷 +385</option>
                      <option value="+53">🇨🇺 +53</option>
                      <option value="+357">🇨🇾 +357</option>
                      <option value="+420">🇨🇿 +420</option>
                      <option value="+45">🇩🇰 +45</option>
                      <option value="+253">🇩🇯 +253</option>
                      <option value="+1767">🇩🇲 +1767</option>
                      <option value="+1809">🇩🇴 +1809</option>
                      <option value="+593">🇪🇨 +593</option>
                      <option value="+20">🇪🇬 +20</option>
                      <option value="+503">🇸🇻 +503</option>
                      <option value="+240">🇬4 +240</option>
                      <option value="+291">🇪🇷 +291</option>
                      <option value="+372">🇪🇪 +372</option>
                      <option value="+251">🇪🇹 +251</option>
                      <option value="+500">🇫🇰 +500</option>
                      <option value="+298">🇫🇴 +298</option>
                      <option value="+679">🇫🇯 +679</option>
                      <option value="+358">🇫🇮 +358</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+594">🇬🇫 +594</option>
                      <option value="+689">🇵🇫 +689</option>
                      <option value="+241">🇬🇦 +241</option>
                      <option value="+220">🇬🇲 +220</option>
                      <option value="+995">🇬🇪 +995</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+233">🇬🇭 +233</option>
                      <option value="+350">🇬🇮 +350</option>
                      <option value="+30">🇬🇷 +30</option>
                      <option value="+299">🇬🇱 +299</option>
                      <option value="+1473">🇬🇩 +1473</option>
                      <option value="+590">🇬🇵 +590</option>
                      <option value="+1671">🇬🇺 +1671</option>
                      <option value="+502">🇬🇹 +502</option>
                      <option value="+44">🇬🇬 +44</option>
                      <option value="+224">🇬🇳 +224</option>
                      <option value="+245">🇬🇼 +245</option>
                      <option value="+592">🇬🇾 +592</option>
                      <option value="+509">🇭🇹 +509</option>
                      <option value="+379">🇻🇦 +379</option>
                      <option value="+504">🇭🇳 +504</option>
                      <option value="+852">🇭🇰 +852</option>
                      <option value="+36">🇭🇺 +36</option>
                      <option value="+354">🇮🇸 +354</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+98">🇮🇷 +98</option>
                      <option value="+964">🇮🇶 +964</option>
                      <option value="+353">🇮🇪 +353</option>
                      <option value="+44">🇮🇲 +44</option>
                      <option value="+972">🇮🇱 +972</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+1876">🇯🇲 +1876</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+44">🇯🇪 +44</option>
                      <option value="+962">🇯🇴 +962</option>
                      <option value="+7">🇰🇿 +7</option>
                      <option value="+254">🇰🇪 +254</option>
                      <option value="+686">🇰🇮 +686</option>
                      <option value="+850">🇰🇵 +850</option>
                      <option value="+82">🇰🇷 +82</option>
                      <option value="+965">🇰🇼 +965</option>
                      <option value="+996">🇰🇬 +996</option>
                      <option value="+856">🇱🇦 +856</option>
                      <option value="+371">🇱🇻 +371</option>
                      <option value="+961">🇱🇧 +961</option>
                      <option value="+266">🇱🇸 +266</option>
                      <option value="+231">🇱🇷 +231</option>
                      <option value="+218">🇱🇾 +218</option>
                      <option value="+423">🇱🇮 +423</option>
                      <option value="+370">🇱🇹 +370</option>
                      <option value="+352">🇱🇺 +352</option>
                      <option value="+853">🇲🇴 +853</option>
                      <option value="+389">🇲🇰 +389</option>
                      <option value="+261">🇲🇬 +261</option>
                      <option value="+265">🇲🇼 +265</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+960">🇲🇻 +960</option>
                      <option value="+223">🇲🇱 +223</option>
                      <option value="+356">🇲🇹 +356</option>
                      <option value="+692">🇲🇭 +692</option>
                      <option value="+596">🇲🇶 +596</option>
                      <option value="+222">🇲🇷 +222</option>
                      <option value="+230">🇲🇺 +230</option>
                      <option value="+262">🇾🇹 +262</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+691">🇫🇲 +691</option>
                      <option value="+373">🇲🇩 +373</option>
                      <option value="+377">🇲🇨 +377</option>
                      <option value="+976">🇲🇳 +976</option>
                      <option value="+382">🇲🇪 +382</option>
                      <option value="+1664">🇲🇸 +1664</option>
                      <option value="+212">🇲🇦 +212</option>
                      <option value="+258">🇲🇿 +258</option>
                      <option value="+95">🇲🇲 +95</option>
                      <option value="+264">🇳🇦 +264</option>
                      <option value="+674">🇳🇷 +674</option>
                      <option value="+977">🇳🇵 +977</option>
                      <option value="+31">🇳🇱 +31</option>
                      <option value="+599">🇦🇳 +599</option>
                      <option value="+687">🇳🇨 +687</option>
                      <option value="+64">🇳🇿 +64</option>
                      <option value="+505">🇳🇮 +505</option>
                      <option value="+227">🇳🇪 +227</option>
                      <option value="+234">🇳🇬 +234</option>
                      <option value="+683">🇳🇺 +683</option>
                      <option value="+672">🇳🇫 +672</option>
                      <option value="+1670">🇲🇵 +1670</option>
                      <option value="+47">🇳🇴 +47</option>
                      <option value="+968">🇴🇲 +968</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+680">🇵🇼 +680</option>
                      <option value="+970">🇵🇸 +970</option>
                      <option value="+507">🇵🇦 +507</option>
                      <option value="+675">🇵🇬 +675</option>
                      <option value="+595">🇵🇾 +595</option>
                      <option value="+51">🇵🇪 +51</option>
                      <option value="+63">🇵🇭 +63</option>
                      <option value="+64">🇵🇳 +64</option>
                      <option value="+48">🇵🇱 +48</option>
                      <option value="+351">🇵🇹 +351</option>
                      <option value="+1787">🇵🇷 +1787</option>
                      <option value="+974">🇶🇦 +974</option>
                      <option value="+262">🇷🇪 +262</option>
                      <option value="+40">🇷🇴 +40</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+250">🇷🇼 +250</option>
                      <option value="+290">🇸🇭 +290</option>
                      <option value="+1869">🇰🇳 +1869</option>
                      <option value="+1758">🇱🇨 +1758</option>
                      <option value="+508">🇵🇲 +508</option>
                      <option value="+1784">🇻🇨 +1784</option>
                      <option value="+685">🇼🇸 +685</option>
                      <option value="+378">🇸🇲 +378</option>
                      <option value="+239">🇸🇹 +239</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+221">🇸🇳 +221</option>
                      <option value="+381">🇷🇸 +381</option>
                      <option value="+248">🇸🇨 +248</option>
                      <option value="+232">🇸🇱 +232</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+421">🇸🇰 +421</option>
                      <option value="+386">🇸🇮 +386</option>
                      <option value="+677">🇸🇧 +677</option>
                      <option value="+252">🇸🇴 +252</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+500">🇬🇸 +500</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+94">🇱🇰 +94</option>
                      <option value="+249">🇸🇩 +249</option>
                      <option value="+597">🇸🇷 +597</option>
                      <option value="+47">🇸🇯 +47</option>
                      <option value="+268">🇸🇿 +268</option>
                      <option value="+46">🇸🇪 +46</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+963">🇸🇾 +963</option>
                      <option value="+886">🇹🇼 +886</option>
                      <option value="+992">🇹🇯 +992</option>
                      <option value="+255">🇹🇿 +255</option>
                      <option value="+66">🇹🇭 +66</option>
                      <option value="+670">🇹🇱 +670</option>
                      <option value="+228">🇹🇬 +228</option>
                      <option value="+690">🇹🇰 +690</option>
                      <option value="+676">🇹🇴 +676</option>
                      <option value="+1868">🇹🇹 +1868</option>
                      <option value="+216">🇹🇳 +216</option>
                      <option value="+90">🇹🇷 +90</option>
                      <option value="+993">🇹🇲 +993</option>
                      <option value="+1649">🇹🇨 +1649</option>
                      <option value="+688">🇹🇻 +688</option>
                      <option value="+256">🇺🇬 +256</option>
                      <option value="+380">🇺🇦 +380</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+598">🇺🇾 +598</option>
                      <option value="+998">🇺🇿 +998</option>
                      <option value="+678">🇻🇺 +678</option>
                      <option value="+58">🇻🇪 +58</option>
                      <option value="+84">🇻🇳 +84</option>
                      <option value="+1284">🇻🇬 +1284</option>
                      <option value="+1340">🇻🇮 +1340</option>
                      <option value="+681">🇼🇫 +681</option>
                      <option value="+967">🇾🇪 +967</option>
                      <option value="+260">🇿🇲 +260</option>
                      <option value="+263">🇿🇼 +263</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-text-muted mb-1">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md focus:ring-1 focus:ring-text-main outline-none bg-bg-primary text-text-main"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">
                    {t.category}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-border rounded-md focus:ring-1 focus:ring-text-main outline-none bg-bg-primary text-text-main"
                  >
                    <option>{t.categories.general}</option>
                    <option>{t.categories.kitchen}</option>
                    <option>{t.categories.wardrobe}</option>
                    <option>{t.categories.living}</option>
                  </select>
                </div>
                <button
                  className="w-full bg-text-main text-bg-primary font-medium py-3 px-4 rounded-md text-sm hover:opacity-90 transition-colors shadow-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.sending : t.send}{" "}
                  <Mail
                    size={16}
                    className={direction === "rtl" ? "rotate-180" : ""}
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Middle Panel: Calendar */}
          <div className="lg:w-1/3 p-8 border-r border-border flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-base font-semibold text-text-main">
                {monthName}
              </h4>
              <div className="flex gap-1" style={{ direction: "ltr" }}>
                {/* Keep buttons in LTR visual order or flip based on logic. Usually Next/Prev arrow icons should be flipped if RTL? Yes. 
                                    Or just keep them LTR as < >. 
                                    If flow is RTL, > should point to Next (Left visually). 
                                    Let's just swap icons or functionality?
                                    Actually, ChevronRight usually means "Forward" regardless of dir, but in RTL "Forward" is Left.
                                    Lucide icons don't auto-flip.
                                    I will manually flip them if RTL.
                                */}
                <button
                  onClick={handlePrevMonth}
                  className="p-1.5 hover:bg-bg-secondary rounded-md text-text-muted hover:text-text-main transition-colors"
                >
                  {direction === "rtl" ? (
                    <ChevronRight size={18} />
                  ) : (
                    <ChevronLeft size={18} />
                  )}
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1.5 hover:bg-bg-secondary rounded-md text-text-muted hover:text-text-main transition-colors"
                >
                  {direction === "rtl" ? (
                    <ChevronLeft size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-6 gap-x-2 text-center text-sm mb-4">
              {dayNames.map((d) => (
                <div
                  key={d}
                  className="text-[10px] font-bold text-text-muted tracking-wider text-center"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-2 gap-x-2 text-center mb-6">
              {[...Array(firstDay)].map((_, i) => (
                <div key={`e-${i}`} className="p-2"></div>
              ))}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const isSelected = selectedDate === day;
                const isToday =
                  day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth();
                return (
                  <motion.button
                    key={day}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedDate(day);
                      setSelectedTime(null);
                    }}
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-medium transition-all relative ${isSelected
                      ? "bg-accent text-bg-primary shadow-md font-bold"
                      : isToday
                        ? "bg-bg-secondary text-text-main font-bold border border-border"
                        : "text-text-muted hover:bg-bg-secondary hover:text-text-main"
                      }`}
                  >
                    {day}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 w-1 h-1 bg-accent rounded-full"></span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Removed Map from here */}
          </div>

          {/* Right Panel: Time Slots */}
          <div className="lg:w-1/3 p-8 bg-bg-secondary flex flex-col h-full overflow-y-auto border-l border-border">
            <h4 className="text-sm font-semibold text-text-main mb-6 sticky top-0 bg-bg-secondary pb-4 border-b border-border">
              {selectedDate
                ? `${monthName.split(" ")[0]} ${selectedDate} • ${duration} min`
                : "Select a date"}
            </h4>

            {!selectedDate ? (
              <div className="flex flex-col items-center justify-center h-64 text-text-muted">
                <CalendarIcon size={48} className="mb-4 opacity-50" />
                <p className="text-sm">{t.subtitle}</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-3"
              >
                {[
                  "9:00am",
                  "9:30am",
                  "10:00am",
                  "10:30am",
                  "11:00am",
                  "11:30am",
                  "1:00pm",
                  "1:30pm",
                  "2:00pm",
                  "3:00pm",
                  "4:00pm",
                ].map((time, idx) => (
                  <motion.button
                    key={time}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition-all relative group ${direction === "rtl" ? "text-right" : "text-left"} ${selectedTime === time
                      ? "bg-bg-primary border-text-main ring-2 ring-text-main text-text-main shadow-sm"
                      : "bg-bg-primary border-border text-text-muted hover:border-text-muted hover:shadow-sm"
                      }`}
                  >
                    {time}
                    {selectedTime === time && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-main"
                      >
                        <CheckCircle size={16} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Location Map Section - Full Width and Color */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 w-full rounded-2xl overflow-hidden border-2 border-border shadow-2xl"
        >
          <div className="bg-bg-primary p-4 border-b border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-text-main flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Visit AxoraKitchens Studio
              </h4>
              <p className="text-text-muted text-sm">Our primary design hub in Sib, Oman</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=23.6773784,58.125394"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-text-main text-bg-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2"
            >
              Get Directions
            </a>
          </div>
          <div className="h-[400px] w-full relative group">
            <iframe
              src="https://maps.google.com/maps?q=23.6773784,58.125394&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Feedback Modal */}
      {feedback.show && (
        <div className="fixed inset-0 z-[2200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-bg-primary p-8 rounded-xl shadow-2xl max-w-sm w-full text-center border border-border"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feedback.type === "success" ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}
            >
              {feedback.type === "success" ? (
                <CheckCircle size={32} />
              ) : (
                <span className="text-3xl font-bold">!</span>
              )}
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">
              {feedback.type === "success" ? t.successTitle : t.errorTitle}
            </h3>
            <p className="text-text-muted mb-6">{feedback.message}</p>
            <button
              onClick={closeFeedback}
              className="bg-text-main text-bg-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
