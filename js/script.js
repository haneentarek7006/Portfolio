/**
 * ============================================================
 * HANEEN TAREK ATTIA — DATA ANALYST PORTFOLIO ENGINE
 * Pure Vanilla JavaScript • Zero External Framework Dependencies
 * Complete Bilingual System (EN / AR) • RTL Adaptive
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------
     1. BILINGUAL DICTIONARY (ENGLISH & ARABIC)
     ------------------------------------------------------------ */
  const translations = {
    en: {
      doc_title: "Haneen Tarek Attia | Aspiring Data Analyst & Medical Informatics Portfolio",
      skip_link: "Skip to main content",
      brand_name: "Haneen Tarek Attia",
      brand_role: "Aspiring Data Analyst",
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_certs: "Certifications",
      nav_experience: "Education & Training",
      nav_contact: "Contact",
      nav_cv_btn: "Resume",

      hero_badge: "Computer Science & Medical Informatics Major | DEPI Trainee",
      hero_title: 'Haneen Tarek Attia<br><span class="gradient-text">Aspiring Data Analyst</span>',
      hero_subtitle: "Computer Science & Medical Informatics student at Zagazig National University and Junior Data Analyst Trainee at DEPI. Specializing in Power BI, Advanced Excel data modeling, and SQL pipelines to transform raw data into clear business intelligence.",
      hero_cta_projects: "View Dashboards",
      hero_cta_cv: "Open CV",
      hero_cta_contact: "Contact Me",
      hero_location: "Zagazig, Al Sharkia",
      hero_status: "Ready for Internship & Analyst Roles",

      chip1_label: "Reporting Efficiency",
      chip2_label: "Analyzed Records",
      chip3_label: "Domain Focus",
      chip3_val: "Medical Informatics",

      stat1_label: "Sales Analyzed (Superstore)",
      stat2_label: "Projects Evaluated (Kickstarter)",
      stat3_label: "Employees Modeled (Amazon HR)",
      stat4_label: "Report Turnaround Time Saved",

      about_tag: "About Me",
      about_title: "Bridging Computer Science, Medical Informatics & Business Analytics",
      about_desc: "A deep commitment to clean data architectures, precise statistical modeling, and actionable visual storytelling.",
      bio_heading: "Professional Profile",
      bio_p1: "I am a Computer Science undergraduate majoring in <strong>Medical Informatics</strong> at <strong>Zagazig National University</strong> with a consistent academic grade of <strong>Very Good</strong>. Concurrently, I am advancing my practical industry skills as a <strong>Junior Data Analyst Trainee at DEPI</strong> (Digital Egypt Pioneers Initiative) and through the <strong>Artificial Intelligence Training Program at the British University in Egypt (BUE)</strong>.",
      bio_p2: "My analytical philosophy focuses on turning disparate datasets—from commercial retail pipelines to complex healthcare records—into reliable, intuitive business intelligence products. By leveraging <strong>Power Query, Advanced Excel formulas, Power BI DAX & synced reporting</strong>, and <strong>Oracle SQL</strong>, I build reporting systems that streamline decision-making and reduce manual compilation time from 30 minutes to just 5 minutes.",
      bio_p3: "I am seeking an <strong>internship or entry-level Data Analyst role</strong> where I can apply my analytical acumen, programming foundation in Python & R, and database engineering to generate measurable impact.",
      bio_h1_title: "B.Sc. in Computer Science & Information",
      bio_h1_sub: "Medical Informatics Major • Zagazig National University",
      bio_h2_title: "DEPI Junior Data Analyst Trainee",
      bio_h2_sub: "Ministry of Communications and Information Technology initiative",
      bio_h3_title: "BUE Artificial Intelligence Program",
      bio_h3_sub: "British University in Egypt • Spring 2025",

      pillar1_title: "Medical Informatics Discipline",
      pillar1_desc: "Equipped with specialized understanding of healthcare data workflows, medical records informatics, and statistical significance in clinical and administrative environments.",
      pillar2_title: "Data Cleaning & Preprocessing",
      pillar2_desc: "Rigorous data cleansing pipelines using Power Query, handling missing values, standardizing categorical features, and establishing robust star-schema relational models.",
      pillar3_title: "Interactive Dashboard Architecture",
      pillar3_desc: "Designing synchronized multi-page reports with drill-through parameters, decomposition trees, custom navigation menus, and executive-level KPI cards.",

      skills_tag: "Competencies",
      skills_title: "Technical Expertise & Analytical Toolset",
      skills_desc: "Strictly verified skills derived from coursework, hands-on dashboard builds, and professional certifications.",
      cat1_title: "Advanced Microsoft Excel",
      cat1_sub: "Modeling & Reporting Engine",
      skill_ex1: "Complex Formulas & Nested Logic",
      skill_ex2: "Power Query Data Cleaning",
      skill_ex3: "Data Modeling & Relationships",
      skill_ex4: "Pivot Tables & Pivot Charts",
      skill_ex5: "Dynamic Dashboards & Slicers",
      skill_ex6: "Conditional Formatting & KPI Alerts",

      cat2_title: "Power BI & Visualization",
      cat2_sub: "Interactive Business Intelligence",
      skill_bi1: "Multi-Page Executive Reports",
      skill_bi2: "Synchronized Slicers & Filters",
      skill_bi3: "Decomposition Tree Analysis",
      skill_bi4: "Custom Page Navigation Buttons",
      skill_bi5: "Treemaps, Donut & Geospatial Maps",
      skill_bi6: "Metric Cards & Target Gauges",

      cat3_title: "Databases & Programming",
      cat3_sub: "Data Extraction & Processing",
      skill_db1: "Oracle SQL & Relational Databases",
      skill_db2: "MySQL Querying & Joins",
      skill_db3: "Python for Data Science & ML",
      skill_db4: "R Programming for Statistics",
      skill_db5: "C++ Core Programming",
      skill_db6: "Data Warehousing & Schema Design",

      cat4_title: "Analysis, Modeling & Statistics",
      cat4_sub: "Insight Discovery & Validation",
      skill_st1: "Exploratory Data Analysis (EDA)",
      skill_st2: "Statistical Summarization & Variance",
      skill_st3: "Correlation & Attrition Modeling",
      skill_st4: "Workforce & Sales Forecasting",
      skill_st5: "Data Hygiene & Outlier Detection",
      skill_st6: "Executive Stakeholder Reporting",

      cat5_title: "Core Soft Skills & Communication",
      cat5_sub: "Collaborative & Problem-Solving Foundation",
      soft1: "Analytical Thinking",
      soft2: "Attention to Detail",
      soft3: "Time Management",
      soft4: "Technical Communication",
      soft5: "Problem Solving",
      soft6: "Teamwork & Collaboration",
      soft7: "Arabic (Native) & English (Intermediate)",

      proj_tag: "Portfolio Showcase",
      proj_title: "Featured Business Intelligence & Analytics Projects",
      proj_desc: "Every metric, screenshot, and insight displayed below is built directly from actual project datasets and verified deliverables.",
      filter_all: "All Projects",
      filter_excel: "Excel Dashboards",

      badge_multipage: "Multi-Page",
      badge_time_saved: "83% Time Saved",
      badge_excel_dash: "Excel Dashboard",
      badge_excel_analytics: "Excel Analytics",
      btn_inspect_report: "Inspect Report",
      btn_inspect_dashboard: "Inspect Dashboard",
      btn_details_views: "Details & Views",

      meta_crowdfund: "Crowdfunding Analysis",
      meta_retail: "Retail & Operations",
      meta_3tabs: "3 Tab Views",
      meta_hr: "Human Resources Analytics",
      meta_10depts: "10 Departments",
      meta_commercial: "Commercial Sales",
      meta_benchmarks: "Rep Benchmarks",

      kpi_pledged: "Total Pledged",
      kpi_backers: "Total Backers",
      kpi_success_rate: "Success Rate",
      kpi_sales: "Total Sales",
      kpi_profit: "Total Profit",
      kpi_margin: "Profit Margin",
      kpi_employees: "Total Employees",
      kpi_satisfaction: "Satisfaction Rate",
      kpi_hours: "Avg Monthly Hours",
      kpi_orders: "Total Orders",
      kpi_top_region: "Top Region (North)",

      p1_title: "Kickstarter Sales & Performance Report",
      p1_summary: "A comprehensive multi-page Power BI analytical suite featuring synchronized slicers, custom navigation, and decomposition tree analysis across 375K crowdfunding campaigns ($17B total goal).",
      p2_title: "Super Store Interactive Dashboard",
      p2_summary: "End-to-end retail commercial performance dashboard engineered with Power Query and data modeling. Reduced regular reporting turnaround time from 30 minutes to 5 minutes through automated ETL.",
      p3_title: "Amazon HR Department Workforce Analytics",
      p3_summary: "Multi-view workforce evaluation dashboard analyzing employee satisfaction rates (63%), monthly working hours (200.47 avg), promotion velocity vs project workload, salary distribution, and attrition risk.",
      p4_title: "Sales Analytics & Performance Dashboard",
      p4_summary: "Executive sales dashboard delivering quick summaries: monthly revenue trends ($67K peak in Dec), deal count distribution by deal size, payment type share, top 5 customer revenue, and regional performance.",

      cert_tag: "Professional Credentials",
      cert_title: "Courses & Certifications",
      cert_desc: "Formal training programs and certifications officially listed in Haneen's credentials. Click any card to inspect details.",
      btn_inspect: "Inspect",
      cert1_org: "Digital Egypt Pioneers Initiative (DEPI)",
      cert1_name: "Junior Data Analyst Track",
      cert1_desc: "Comprehensive professional workforce training program administered under the Ministry of Communications and Information Technology, covering data cleaning, business intelligence reporting, Power BI, SQL, and analytical decision support.",
      cert1_status: "Ongoing Training (Jul 2026 – Present)",
      cert3_name: "The Complete SQL Bootcamp (MySQL / Oracle)",
      cert3_desc: "In-depth relational database architecture, query optimization, complex multi-table joins, subqueries, aggregation functions, window functions, and database administration with MySQL and Oracle Database environments.",
      cert3_status: "Course Completion",
      cert4_name: "Python for Data Science and Machine Learning",
      cert4_desc: "Exploratory data analysis, statistical operations, preprocessing pipelines, feature engineering, and supervised/unsupervised machine learning workflows using Python data science libraries.",
      cert4_status: "Course Completion",
      cert5_org: "British University in Egypt (BUE)",
      cert5_name: "Artificial Intelligence Training Program",
      cert5_desc: "Specialized intensive academic training in modern artificial intelligence algorithms, neural computing paradigms, predictive models, and ethical AI deployment scenarios.",
      cert5_status: "Completed (Spring 2025)",

      time_tag: "Academic & Training Track",
      time_title: "Education & Professional Experience",
      time_desc: "Transparent record of academic degree progress and formal training programs.",
      t1_period: "2024 – Present",
      t1_grade: "Grade: Very Good",
      t1_title: "Bachelor of Computer Science and Information",
      t1_org: "Medical Informatics Major • Zagazig National University",
      t1_desc: "Specializing in medical informatics—the convergence of computer science, data architecture, and health sciences. Studying data structures, database management systems, algorithmic problem solving, statistical methods, and clinical information systems.",
      t2_period: "Jul 2026 – Present",
      t2_badge: "Active Training",
      t2_title: "Junior Data Analyst Trainee",
      t2_org: "Digital Egypt Pioneers Initiative (DEPI)",
      t2_desc: "Engaged in intensive applied training on modern data analysis methodologies, database querying with SQL, data transformation with Power Query, enterprise dashboard development with Power BI, and collaborative technical delivery.",
      t3_period: "Spring 2025",
      t3_badge: "Academic Training",
      t3_title: "Artificial Intelligence Training Program",
      t3_org: "British University in Egypt (BUE)",
      t3_desc: "Completed rigorous theoretical and practical workshops on core AI concepts, intelligent systems, learning algorithms, and real-world analytical application scenarios.",

      srv_tag: "Value Proposition",
      srv_title: "What I Bring to Your Analytics Team",
      srv_desc: "Practical data analytical capabilities ready to support business and healthcare workflows.",
      srv1_title: "Interactive Power BI Dashboards",
      srv1_desc: "Designing structured, multi-page business intelligence reports with customized slicers, drill-through cards, and decomposition trees for executive clarity.",
      srv2_title: "Advanced Excel Automation & Modeling",
      srv2_desc: "Building automated data models with Power Query, complex formula frameworks, and dynamic pivot tables that cut repetitive manual reporting hours down to minutes.",
      srv3_title: "Data Cleaning & Preprocessing",
      srv3_desc: "Cleaning messy datasets, rectifying nulls and formatting discrepancies, establishing relational keys, and structuring raw inputs into analysis-ready schemas.",
      srv4_title: "Healthcare & Informatics Literacy",
      srv4_desc: "Leveraging Medical Informatics domain knowledge to analyze clinical and healthcare datasets with meticulous respect for data governance and accuracy.",

      contact_tag: "Let's Connect",
      contact_title: "Get in Touch",
      contact_desc: "Available for data analyst internships, entry-level roles, and analytical collaborations.",
      c_email_label: "Email Address",
      c_phone_label: "Phone & WhatsApp",
      c_loc_label: "Location",
      c_loc_val: "Zagazig, Al Sharkia, Egypt",
      btn_copy: "Copy",
      btn_chat: "Chat",

      form_title: "Send a Direct Message",
      form_subtitle: "Fill in the form below to reach out directly via your preferred email client or WhatsApp.",
      f_name: "Your Name",
      f_name_ph: "e.g. Sarah Jenkins",
      f_email: "Your Email",
      f_email_ph: "name@company.com",
      f_subject: "Subject",
      f_subject_ph: "Data Analyst Internship / Inquiry",
      f_msg: "Message",
      f_msg_ph: "Describe your team's opening or project requirements...",
      f_btn_email: "Send via Email",
      f_btn_wa: "Send via WhatsApp",

      footer_role: "Computer Science & Medical Informatics Major | Aspiring Data Analyst",
      footer_tagline: "Committed to analytical rigor, healthcare informatics, and high-impact business intelligence.",
      footer_nav_title: "Navigation",
      footer_channels_title: "Verified Channels",
      footer_dl_cv: "Download Resume (PDF)",
      footer_copy: "All verified data sourced from official CV & project assets.",
      footer_tag: "Designed with semantic HTML5, pure CSS3, and Vanilla JavaScript. Zero unauthorized frameworks."
    },

    ar: {
      doc_title: "حنين طارق عطية | محللة بيانات طموحة ومعلوماتية طبية",
      skip_link: "انتقل إلى المحتوى الرئيسي",
      brand_name: "حنين طارق عطية",
      brand_role: "محللة بيانات طموحة",
      nav_home: "الرئيسية",
      nav_about: "نبذة عني",
      nav_skills: "المهارات",
      nav_projects: "المشاريع",
      nav_certs: "الشهادات",
      nav_experience: "التعليم والتدريب",
      nav_contact: "تواصل معي",
      nav_cv_btn: "السيرة الذاتية",

      hero_badge: "حاسبات ومعلومات • تخصص معلوماتية طبية | متدربة بمبادرة رواد مصر الرقمية (DEPI)",
      hero_title: 'حنين طارق عطية<br><span class="gradient-text">محللة بيانات طموحة</span>',
      hero_subtitle: "طالبة علوم الحاسب والمعلوماتية الطبية بجامعة الزقازيق الأهلية ومتدربة محلل بيانات مبتدئ بمبادرة DEPI. متخصصة في Power BI ونمذجة البيانات المتقدمة في Excel وSQL لتحويل البيانات إلى رؤى أعمال ذكية.",
      hero_cta_projects: "استعراض لوحات البيانات",
      hero_cta_cv: "فتح السيرة الذاتية",
      hero_cta_contact: "تواصل معي",
      hero_location: "الزقازيق، الشرقية",
      hero_status: "جاهزة لفرص التدريب وأدوار تحليل البيانات",

      chip1_label: "كفاءة إعداد التقارير",
      chip2_label: "السجلات المحللة",
      chip3_label: "مجال التخصص",
      chip3_val: "معلوماتية طبية",

      stat1_label: "مبيعات تم تحليلها (Superstore)",
      stat2_label: "مشاريع تم تقييمها (Kickstarter)",
      stat3_label: "موظفون تمت نمذجتهم (Amazon HR)",
      stat4_label: "توفير وقت إعداد التقارير",

      about_tag: "نبذة عني",
      about_title: "الربط بين علوم الحاسب والمعلوماتية الطبية وتحليلات الأعمال",
      about_desc: "التزام كامل بهندسة البيانات النظيفة، والنمذجة الإحصائية الدقيقة، والسرد البصري الفعال للرؤى والأرقام.",
      bio_heading: "الملف المهني والأكاديمي",
      bio_p1: "طالبة علوم حاسب متخصصة في <strong>المعلوماتية الطبية (Medical Informatics)</strong> في <strong>جامعة الزقازيق الأهلية</strong> بتقدير تراكمي مستمر <strong>جيد جداً</strong>. وفي الوقت ذاته، أعمل على صقل مهاراتي العملية كـ <strong>متدربة تحليل بيانات مبتدئة في مبادرة رواد مصر الرقمية (DEPI)</strong> ومن خلال <strong>برنامج تدريب الذكاء الاصطناعي في الجامعة البريطانية في مصر (BUE)</strong>.",
      bio_p2: "ترتكز فلسفتي التحليلية على تحويل البيانات المتفرقة—سواء كانت مبيعات تجارية أو سجلات صحية طبية معقدة—إلى حلول ذكاء أعمال موثوقة وسهلة الفهم. من خلال توظيف <strong>Power Query ومعادلات Excel المتقدمة، ومقاييس DAX في Power BI</strong> وقواعد بيانات <strong>Oracle SQL</strong>، أعمل على تطوير أنظمة تقارير تختصر الوقت المستغرق في تجهيز البيانات من 30 دقيقة إلى 5 دقائق فقط.",
      bio_p3: "أسعى للحصول على <strong>فرصة تدريب عملي (Internship) أو دور وظيفي كمحللة بيانات مبتدئة (Junior Data Analyst)</strong> لتطبيق قدراتي التحليلية وخلفيتي البرمجية في بايثون و R لتوليد قيمة ملموسة.",
      bio_h1_title: "بكالوريوس الحاسبات والمعلومات",
      bio_h1_sub: "تخصص المعلوماتية الطبية • جامعة الزقازيق الأهلية",
      bio_h2_title: "متدربة تحليل بيانات بمبادرة رواد مصر الرقمية (DEPI)",
      bio_h2_sub: "إحدى مبادرات وزارة الاتصالات وتكنولوجيا المعلومات",
      bio_h3_title: "برنامج تدريب الذكاء الاصطناعي بجامعة BUE",
      bio_h3_sub: "الجامعة البريطانية في مصر • ربيع 2025",

      pillar1_title: "تخصص المعلوماتية الطبية",
      pillar1_desc: "فهم متقدم لتدفق البيانات الصحية، ونظم السجلات الطبية، والتحليل الإحصائي السريري والإداري للرعاية الصحية.",
      pillar2_title: "تنظيف ومعالجة البيانات (Data Cleaning)",
      pillar2_desc: "بناء خطوط تنقية قوية باستخدام Power Query، والتعامل مع القيم المفقودة، وتوحيد الفئات، وتأسيس نماذج نجمية (Star-Schema).",
      pillar3_title: "معمارية لوحات البيانات التفاعلية",
      pillar3_desc: "تصميم تقارير تنفيذية متعددة الصفحات مع فلاتر متزامنة، وأشجار تفكيك البيانات (Decomposition Tree)، وقوائم تنقل سلسة.",

      skills_tag: "الجدارات والمهارات",
      skills_title: "الخبرات التقنية وأدوات التحليل",
      skills_desc: "مهارات حقيقية موثقة مستمدة من المقررات الجامعية وبناء المشاريع العملية والشهادات الرسمية.",
      cat1_title: "مايكروسوفت إكسل المتقدم (Excel)",
      cat1_sub: "محرك النمذجة والتقارير المالية والتشغيلية",
      skill_ex1: "المعادلات المعقدة والشروط المتداخلة",
      skill_ex2: "تنظيف وتحويل البيانات عبر Power Query",
      skill_ex3: "نمذجة البيانات وبناء العلاقات بين الجداول",
      skill_ex4: "الجداول والمخططات المحورية (Pivot Tables/Charts)",
      skill_ex5: "لوحات التحكم الديناميكية وشرائح الفلترة (Slicers)",
      skill_ex6: "التنسيق الشرطي وتنبيهات مؤشرات الأداء (KPIs)",

      cat2_title: "Power BI وتصور البيانات",
      cat2_sub: "ذكاء الأعمال والتقارير التنفيذية التفاعلية",
      skill_bi1: "تقارير تنفيذية تفاعلية متعددة الصفحات",
      skill_bi2: "الفلاتر وشرائح التصفية المتزامنة",
      skill_bi3: "شجرة تفكيك الأسباب والمبيعات (Decomposition Tree)",
      skill_bi4: "أزرار وقوائم التنقل المخصصة داخل التقرير",
      skill_bi5: "الخرائط الشجرية (Treemaps) والخرائط الجغرافية",
      skill_bi6: "بطاقات مؤشرات الأداء الحيوية ومقاييس الأهداف",

      cat3_title: "قواعد البيانات والبرمجة",
      cat3_sub: "استخراج ومعالجة وتخزين البيانات",
      skill_db1: "قواعد بيانات Oracle SQL والعلاقات العلائقية",
      skill_db2: "استعلامات MySQL والربط المعقد (Joins)",
      skill_db3: "بايثون (Python) لتحليل البيانات وتعلم الآلة",
      skill_db4: "لغة R للإحصاء المتقدم والتحليل الحيوي",
      skill_db5: "البرمجة بلغة ++C وهياكل البيانات",
      skill_db6: "تصميم مستودعات البيانات وهياكل الجداول",

      cat4_title: "التحليل والنمذجة والإحصاء",
      cat4_sub: "استكشاف الأنماط والتحقق من المؤشرات",
      skill_st1: "التحليل الاستكشافي للبيانات (EDA)",
      skill_st2: "التلخيص الإحصائي وقياس التباين والانحراف",
      skill_st3: "نمذجة الارتباط ومعدلات دوران الموظفين",
      skill_st4: "توقعات أداء المبيعات والموارد البشرية",
      skill_st5: "تنقية الشوائب واكتشاف القيم الشاذة (Outliers)",
      skill_st6: "صياغة التقارير التنفيذية لأصحاب القرار",

      cat5_title: "المهارات الشخصية والتواصل",
      cat5_sub: "أساس العمل الجماعي وحل المشكلات",
      soft1: "التفكير التحليلي المنظم",
      soft2: "الدقة الشديدة والاهتمام بالتفاصيل",
      soft3: "إدارة الوقت والالتزام بالمواعيد",
      soft4: "التواصل التقني الفعال",
      soft5: "حل المشكلات المعقدة برمجياً وتحليلياً",
      soft6: "العمل بروح الفريق والتعاون البناء",
      soft7: "العربية (اللغة الأم) والإنجليزية (مستوى جيد)",

      proj_tag: "معرض المشاريع",
      proj_title: "لوحات بيانات ذكاء الأعمال والتحليلات المتخصصة",
      proj_desc: "جميع المؤشرات والأرقام والصور المعروضة أدناه مستخرجة بالكامل من ملفات المشاريع والبيانات الحقيقية.",
      filter_all: "جميع المشاريع",
      filter_excel: "لوحات إكسل",

      badge_multipage: "متعدد الصفحات",
      badge_time_saved: "توفير 83% من الوقت",
      badge_excel_dash: "لوحة تحكم إكسل",
      badge_excel_analytics: "تحليلات إكسل",
      btn_inspect_report: "فحص التقرير",
      btn_inspect_dashboard: "فحص اللوحة",
      btn_details_views: "التفاصيل والشاشات",

      meta_crowdfund: "تحليلات التمويل الجماعي",
      meta_retail: "مبيعات التجزئة والعمليات",
      meta_3tabs: "3 شاشات تفاعلية",
      meta_hr: "تحليلات الموارد البشرية",
      meta_10depts: "10 أقسام وظيفية",
      meta_commercial: "المبيعات التجارية",
      meta_benchmarks: "مقارنات أداء المندوبين",

      kpi_pledged: "إجمالي التبرعات",
      kpi_backers: "إجمالي الداعمين",
      kpi_success_rate: "نسبة النجاح",
      kpi_sales: "إجمالي المبيعات",
      kpi_profit: "صافي الأرباح",
      kpi_margin: "هامش الربح",
      kpi_employees: "إجمالي الموظفين",
      kpi_satisfaction: "معدل الرضا",
      kpi_hours: "متوسط الساعات شهرياً",
      kpi_orders: "عدد الطلبات",
      kpi_top_region: "أعلى منطقة (الشمال)",

      p1_title: "تقرير مبيعات وأداء كيك ستارتر (Power BI)",
      p1_summary: "منظومة تحليلية تنفيذية متعددة الصفحات في Power BI تتضمن فلاتر متزامنة، وتنقلاً سلساً بين الشاشات، وشجرة تفكيك لأداء 375 ألف حملة تمويل جماعي بمستهدفات مالية بلغت 17 مليار دولار.",
      p2_title: "لوحة تحكم عمليات ومبيعات Super Store",
      p2_summary: "لوحة بيانات مبيعات تجزئة شاملة تم بناؤها باستخدام Power Query ونمذجة البيانات. ساهمت في خفض الوقت الدوري لإعداد التقارير من 30 دقيقة إلى 5 دقائق فقط عبر الأتمتة.",
      p3_title: "تحليلات القوى العاملة لقسم موارد أمازون (HR)",
      p3_summary: "لوحة تقييم متعددة الشاشات لدراسة معدلات رضا الموظفين (63%)، وساعات العمل الشهرية (200.47 ساعة)، ومعدل الترقيات مقارنة بأعباء المشاريع وتوزيع الرواتب وخطر المغادرة.",
      p4_title: "لوحة تحليلات المبيعات وأداء المندوبين",
      p4_summary: "لوحة تنفيذية تقدم ملخصاً سريعاً لأداء المبيعات التجارية: اتجاهات الإيرادات الشهرية (ذروة ديسمبر 67 ألف دولار)، وتوزيع الصفقات حسب الحجم، وطرق الدفع، وعملاء الصدارة.",

      cert_tag: "الشهادات والاعتمادات الرسمية",
      cert_title: "الدورات والبرامج المعتمدة",
      cert_desc: "البرامج التدريبية الرسمية والشهادات المهنية المدرجة في السيرة الذاتية لحنين. انقر فوق أي بطاقة لمشاهدة التفاصيل.",
      btn_inspect: "فحص الشهادة",
      cert1_org: "مبادرة رواد مصر الرقمية (DEPI)",
      cert1_name: "مسار محلل البيانات المبتدئ (Junior Data Analyst Track)",
      cert1_desc: "برنامج تدريبي مهني متقدم برعاية وزارة الاتصالات وتكنولوجيا المعلومات يغطي تنقية البيانات، وإعداد تقارير ذكاء الأعمال، وأدوات Power BI و SQL ودعم اتخاذ القرار التحليلي.",
      cert1_status: "تدريب مستمر (يوليو 2026 – الآن)",
      cert3_name: "معسكر SQL الشامل (MySQL / Oracle)",
      cert3_desc: "دراسة معمقة لمعمارية قواعد البيانات العلائقية، وتحسين الاستعلامات، وعمليات الربط المتعددة، والدوال التجميعية ونوافذ التحليل (Window Functions) وإدارة قواعد البيانات.",
      cert3_status: "إتمام دورة معتمدة",
      cert4_name: "بايثون لعلوم البيانات وتعلم الآلة (Udemy)",
      cert4_desc: "التحليل الاستكشافي للبيانات، والعمليات الإحصائية، وخطوط المعالجة المسبقة، وهندسة الميزات وبناء نماذج تعلم الآلة التنبؤية باستخدام مكتبات بايثون المتخصصة.",
      cert4_status: "إتمام دورة معتمدة",
      cert5_org: "الجامعة البريطانية في مصر (BUE)",
      cert5_name: "برنامج تدريب الذكاء الاصطناعي (AI Training Program)",
      cert5_desc: "تدريب أكاديمي مكثف على خوارزميات الذكاء الاصطناعي الحديثة، والحوسبة العصبية، والنماذج التنبؤية، وسيناريوهات التطبيق في قطاعات الأعمال والرعاية الصحية.",
      cert5_status: "مكتمل (ربيع 2025)",

      time_tag: "المسار الأكاديمي والتدريبي",
      time_title: "التعليم والخبرات العملية",
      time_desc: "سجل موثق لمراحل التقدم الدراسي الجامعي والبرامج التدريبية التخصصية.",
      t1_period: "2024 – حتى الآن",
      t1_grade: "التقدير: جيد جداً",
      t1_title: "بكالوريوس الحاسبات والمعلومات",
      t1_org: "تخصص المعلوماتية الطبية • جامعة الزقازيق الأهلية",
      t1_desc: "التخصص في المعلوماتية الطبية—نقطة التقاء علوم الحاسب وهندسة البيانات بالعلوم الصحية والطبية. دراسة هياكل البيانات، وقواعد البيانات، والخوارزميات، والإحصاء ونظم معلومات الرعاية الصحية.",
      t2_period: "يوليو 2026 – حتى الآن",
      t2_badge: "تدريب مهني قائم",
      t2_title: "متدربة محللة بيانات مبتدئة",
      t2_org: "مبادرة رواد مصر الرقمية (DEPI)",
      t2_desc: "مشاركة نشطة في التدريب العملي المتقدم على أحدث منهجيات تحليل البيانات، واستعلامات SQL، وتحويل وتنظيف البيانات في Power Query، وبناء التقارير المؤسسية في Power BI.",
      t3_period: "ربيع 2025",
      t3_badge: "تدريب أكاديمي",
      t3_title: "برنامج تدريب الذكاء الاصطناعي",
      t3_org: "الجامعة البريطانية في مصر (BUE)",
      t3_desc: "إتمام ورش عمل نظرية وتطبيقية مكثفة حول مفاهيم الذكاء الاصطناعي الأساسية، والنظم الخبيرة، وخوارزميات التعلم الآلي وسيناريوهات توظيفها في العالم الحقيقي.",

      srv_tag: "القيمة المضافة",
      srv_title: "ما أقدمه لفريق تحليل البيانات والمؤسسات",
      srv_desc: "قدرات تحليلية عملية جاهزة لدعم سير العمل في البيئات الطبية والتجارية.",
      srv1_title: "لوحات بيانات Power BI تفاعلية",
      srv1_desc: "تصميم تقارير ذكاء أعمال متعددة الصفحات مع شرائح تصفية مخصصة، وبطاقات استكشافية، وأشجار تفكيك توفر الوضوح للقيادات التنفيذية.",
      srv2_title: "أتمتة ونمذجة إكسل المتقدمة",
      srv2_desc: "بناء نماذج بيانات مؤتمتة باستخدام Power Query ومعادلات متقدمة وجداول محورية ديناميكية تختصر ساعات التقرير اليدوية إلى دقائق معدودة.",
      srv3_title: "تنظيف ومعالجة البيانات الأولية",
      srv3_desc: "تنقية البيانات المشوشة، ومعالجة القيم الخالية وتناقضات التنسيق، وإنشاء المفاتيح العلائقية وهيكلة المدخلات في مخططات جاهزة للتحليل الفوري.",
      srv4_title: "الإلمام بالبيانات والمعلوماتية الطبية",
      srv4_desc: "استثمار الخلفية التخصصية في المعلوماتية الطبية لتحليل البيانات الصحية والسريرية مع احترام كامل لمعايير الحوكمة ودقة البيانات.",

      contact_tag: "تواصل معي",
      contact_title: "بيانات الاتصال المباشر",
      contact_desc: "متاحة لفرص التدريب الصيفي، ووظائف تحليل البيانات المبتدئة، والمشاريع التحليلية التعاونية.",
      c_email_label: "البريد الإلكتروني",
      c_phone_label: "الهاتف والواتساب",
      c_loc_label: "الموقع الجغرافي",
      c_loc_val: "الزقازيق، محافظة الشرقية، مصر",
      btn_copy: "نسخ",
      btn_chat: "محادثة",

      form_title: "إرسال رسالة مباشرة",
      form_subtitle: "املأ الحقول التالية لإرسال رسالتك مباشرة عبر بريدك الإلكتروني المفضل أو تطبيق واتساب.",
      f_name: "الاسم الكريم",
      f_name_ph: "مثال: م. سارة أحمد",
      f_email: "بريدك الإلكتروني",
      f_email_ph: "name@company.com",
      f_subject: "الموضوع",
      f_subject_ph: "فرصة تدريب / استفسار تحليل بيانات",
      f_msg: "نص الرسالة",
      f_msg_ph: "اكتب تفاصيل الفرصة الوظيفية أو متطلبات المشروع التحليلي...",
      f_btn_email: "إرسال عبر البريد الإلكتروني",
      f_btn_wa: "إرسال عبر واتساب",

      footer_role: "طالبة حاسبات ومعلومات • تخصص معلوماتية طبية | محللة بيانات طموحة",
      footer_tagline: "ملتزمة بالدقة التحليلية، والمعلوماتية الطبية، وتوليد قيمة حقيقية من ذكاء الأعمال.",
      footer_nav_title: "روابط سريعة",
      footer_channels_title: "القنوات الرسمية المعتمدة",
      footer_dl_cv: "تحميل السيرة الذاتية (PDF)",
      footer_copy: "جميع البيانات المعروضة موثقة ومستخرجة من السيرة الذاتية وملفات المشاريع الفعلية.",
      footer_tag: "مبني باستخدام HTML5 الدلالي و CSS3 النقي و Vanilla JavaScript. بدون أي أطر عمل خارجية."
    }
  };

  /* ------------------------------------------------------------
     2. LANGUAGE CONTROLLER & SWITCHER
     ------------------------------------------------------------ */
  const langToggle = document.getElementById('langToggle');
  const langText = document.getElementById('langText');
  const htmlRoot = document.documentElement;

  // Retrieve saved language or default to English
  let currentLang = localStorage.getItem('haneen_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('haneen_lang', lang);

    // Update toggle button text
    if (langText) {
      langText.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    const dict = translations[lang];
    if (!dict) return;

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate all data-i18n-ph elements (placeholders)
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update document title
    if (dict.doc_title) {
      document.title = dict.doc_title;
    }
  }

  // Initial language application
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(newLang);
      showToast(newLang === 'ar' ? 'تم تحويل الموقع إلى اللغة العربية' : 'Switched to English');
    });
  }

  /* ------------------------------------------------------------
     3. THEME SWITCHER (DARK / LIGHT MODE)
     ------------------------------------------------------------ */
  const themeToggle = document.getElementById('themeToggle');

  const savedTheme = localStorage.getItem('haneen_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('haneen_theme', newTheme);
      showToast(
        currentLang === 'ar' 
          ? (newTheme === 'dark' ? 'تم تفعيل الوضع الليلي' : 'تم تفعيل الوضع النهاري')
          : `Switched to ${newTheme} mode`
      );
    });
  }

  /* ------------------------------------------------------------
     4. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------ */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function openDrawer() {
    navMenu.classList.add('open');
    drawerBackdrop.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navMenu.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 991) {
        closeDrawer();
      }
    });
  });

  /* ------------------------------------------------------------
     5. SCROLL SPY & NAVBAR SHADOW & BACK TO TOP
     ------------------------------------------------------------ */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 50) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }

    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------
     6. HERO STATS COUNTER ANIMATION
     ------------------------------------------------------------ */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const format = stat.getAttribute('data-format');
      const duration = 1800;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOutQuad;

        if (format === 'currency') {
          stat.textContent = '$' + (currentVal / 1000000).toFixed(2) + 'M+';
        } else if (format === 'count') {
          if (target >= 100000) {
            stat.textContent = Math.round(currentVal / 1000) + 'K+';
          } else {
            stat.textContent = Math.round(currentVal).toLocaleString();
          }
        } else if (format === 'percent') {
          stat.textContent = Math.round(currentVal) + '%';
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const statsBar = document.querySelector('.hero-stats-bar');
  if (statsBar && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.unobserve(statsBar);
      }
    }, { threshold: 0.3 });
    observer.observe(statsBar);
  } else {
    animateStats();
  }

  /* ------------------------------------------------------------
     7. PROJECT FILTER CONTROLS
     ------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ------------------------------------------------------------
     8. BILINGUAL PROJECT DATA REGISTRY
     ------------------------------------------------------------ */
  const projectDataRegistry = {
    'kickstarter': {
      en: {
        title: 'Kickstarter Sales & Performance Report',
        subtitle: 'Multi-Page Executive Crowdfunding Business Intelligence Suite',
        category: 'Power BI • DAX • Data Modeling',
        gallery: [
          { src: 'assets/projects/kickstarter-overview.png', caption: 'Overview: 375K Projects, 40M Backers, $17B Goal, $3B Pledged, Top 5 Projects & Country Breakdown' },
          { src: 'assets/projects/kickstarter-successful.png', caption: 'Successful Projects: 134K Successes, 35M Backers, $1B Goal, $3B Pledged, 35.71% Success Rate with Decomposition Tree' },
          { src: 'assets/projects/kickstarter-backers.png', caption: 'Backers & Engagement: Backers by Country, Subcategories (Product Design, Tabletop Games), and Global Map' },
          { src: 'assets/projects/kickstarter-failed.png', caption: 'Failed Projects: 198K Failed Campaigns, 52.72% Failure Rate, Goal Over-Ambition Modeling ($12B Goal vs $261M Pledged)' }
        ],
        problemStatement: 'Crowdfunding campaign creators and stakeholders face massive uncertainty when launching Kickstarter projects. Without multi-dimensional historical benchmarks, project creators frequently miscalculate funding goals, fail to target the most receptive countries, and experience severe funding failure rates.',
        methodology: 'Developed an enterprise-grade multi-page Power BI report with synchronized cross-filters and custom page navigation. Modeled 375,000 campaigns across 15 parent categories and dozens of subcategories, constructing DAX measures for success rates, pledge-to-goal fulfillment percentages, and backer engagement densities.',
        insights: [
          '35.71% overall campaign success rate across 375,000 tracked initiatives.',
          'Pebble Time and COOLEST COOLER led individual project pledge records with tens of millions raised.',
          'United States and United Kingdom represent over 90% of all backing volume (33M and 3M backers respectively).',
          'Games and Design categories secured the highest pledge volumes and backer engagement (over 18M combined backers).',
          'Failed projects exhibited goals exceeding 4x realistic median pledges ($12B aggregate goal vs $261M realized), validating target calibration guidelines.'
        ],
        kpis: [
          { label: 'Total Analyzed Projects', value: '375,000' },
          { label: 'Total Capital Pledged', value: '$3.0 Billion' },
          { label: 'Total Global Backers', value: '40 Million' },
          { label: 'Successful Campaigns', value: '134,000 (35.7%)' },
          { label: 'Failed Campaigns', value: '198,000 (52.7%)' }
        ],
        tools: ['Power BI Desktop', 'DAX Measures', 'Power Query ETL', 'Decomposition Tree Visual', 'Data Modeling'],
        downloadLabel: 'Download Power BI Report (.pbix)'
      },
      ar: {
        title: 'تقرير مبيعات وأداء كيك ستارتر (Power BI)',
        subtitle: 'منظومة ذكاء أعمال تنفيذية متعددة الصفحات لتحليل التمويل الجماعي',
        category: 'Power BI • مقاييس DAX • نمذجة البيانات',
        gallery: [
          { src: 'assets/projects/kickstarter-overview.png', caption: 'نظرة عامة: 375 ألف مشروع، 40 مليون داعم، 17 مليار دولار هدف، 3 مليارات تبرعات محققة' },
          { src: 'assets/projects/kickstarter-successful.png', caption: 'المشاريع الناجحة: 134 ألف مشروع، 35 مليون داعم، نسبة نجاح 35.71% مع شجرة التفكيك' },
          { src: 'assets/projects/kickstarter-backers.png', caption: 'تحليل الداعمين: التوزيع حسب الدول والفئات الفرعية وخريطة الانتشار العالمية' },
          { src: 'assets/projects/kickstarter-failed.png', caption: 'المشاريع المتعثرة: 198 ألف مشروع بنسبة فشل 52.72% بسبب المبالغة في تحديد الأهداف المالية' }
        ],
        problemStatement: 'يواجه أصحاب حملات التمويل الجماعي والمستثمرون تحديات كبيرة في تقدير فرص النجاح. وبدون وجود معايير مرجعية تاريخية متعددة الأبعاد، كثيراً ما يخطئ أصحاب المشاريع في تقدير الأهداف المالية، أو يفشلون في استهداف الدول الأكثر دعماً، مما يؤدي لارتفاع نسب الفشل.',
        methodology: 'تم بناء تقرير مؤسسي متعدد الصفحات في Power BI مع فلاتر تصفية متزامنة وأزرار تنقل مخصصة. تمت نمذجة 375 ألف حملة عبر 15 فئة رئيسية وعشرات الفئات الفرعية، وصياغة مقاييس DAX لحساب نسب النجاح، ومعدل الوفاء بالأهداف، وكثافة تفاعل الداعمين.',
        insights: [
          'نسبة النجاح العامة للمشاريع بلغت 35.71% عبر 375,000 مبادرة تم تتبعها.',
          'حقق مشروعا Pebble Time و COOLEST COOLER أرقاماً قياسية في حجم التبرعات بعشرات الملايين من الدولارات.',
          'تمثل الولايات المتحدة والمملكة المتحدة أكثر من 90% من إجمالي عدد الداعمين (33 مليون و 3 ملايين داعم).',
          'تصدرت فئتا الألعاب (Games) والتصميم (Design) أعلى مستويات الدعم بجمع أكثر من 18 مليون داعم مجتمعين.',
          'أظهرت المشاريع الفاشلة أهدافاً مبالغاً فيها تجاوزت 4 أضعاف التبرعات الواقعية ($12B مستهدف مقابل $261M فقط محقق).'
        ],
        kpis: [
          { label: 'إجمالي المشاريع المحللة', value: '375,000 مشروع' },
          { label: 'إجمالي التبرعات المحققة', value: '3.0 مليار دولار' },
          { label: 'إجمالي الداعمين حول العالم', value: '40 مليون داعم' },
          { label: 'المشاريع الناجحة', value: '134,000 (35.7%)' },
          { label: 'المشاريع غير المكتملة', value: '198,000 (52.7%)' }
        ],
        tools: ['Power BI Desktop', 'معادلات DAX', 'Power Query ETL', 'شجرة التفكيك Decomposition Tree', 'نمذجة البيانات'],
        downloadLabel: 'تحميل ملف التقرير الأصلي (.pbix)'
      },
      downloadFile: 'assets/files/Kickstarter_Report.pbix'
    },

    'superstore': {
      en: {
        title: 'Super Store Interactive Commercial Dashboard',
        subtitle: 'Operations & Commercial Performance Architecture',
        category: 'Power BI • DAX • Data Modeling',
        gallery: [
          { src: 'assets/projects/superstore-overview.png', caption: 'Overview Tab: Global Sales Map, Profit by Sub-Category, Sales by Customer Segment, and Ship Mode' },
          { src: 'assets/projects/superstore-analyze.png', caption: 'Analyze Tab: Decomposition Tree (Region > Category), Sales Donut Chart, and KPI Target Gauges' },
          { src: 'assets/projects/superstore-table.png', caption: 'Table Tab: Granular Order Line Details (Order ID, Customer, Category, Sales, Discount) with Dynamic Slicers' }
        ],
        problemStatement: 'Retail leadership required regular consolidation of massive retail order transactions to track profitability by region, segment, and shipping method. Previous manual reporting workflows took 30+ minutes per cycle, suffered from spreadsheet version divergence, and lacked drill-through capability.',
        methodology: 'Built an end-to-end automated interactive dashboard utilizing Power Query to ingest, clean, and normalize order rows, customer segments, and geographic coordinates. Modeled a star schema with calculated profit margins, dynamic slicers for State, Sub-Category, Year, and Month, and integrated synchronized gauge indicators in Power BI.',
        insights: [
          'Reduced routine reporting and data consolidation time from 30 minutes to 5 minutes (83% reduction in report generation).',
          'Identified Copiers ($56K) and Phones ($45K) as the most profitable sub-categories, while Binders and Tables required margin adjustments.',
          'West Region ($725K) and East Region ($678K) contributed over 60% of total commercial revenue ($2.30M total).',
          'Standard Class shipping represents the overwhelming volume of orders ($1.36M), presenting opportunities for carrier rate optimizations.',
          'Technology segment delivered the healthiest profit margin (36.4% of total sales).'
        ],
        kpis: [
          { label: 'Total Sales Analyzed', value: '$2,297,200.86' },
          { label: 'Total Profit Generated', value: '$286,400' },
          { label: 'Profit Margin', value: '12.47%' },
          { label: 'Total Order Quantity', value: '38,000 Units' },
          { label: 'Reporting Turnaround', value: '30m -> 5m' }
        ],
        tools: ['Power BI Desktop', 'DAX Measures', 'Power Query ETL', 'Data Modeling', 'Interactive Slicers'],
        downloadLabel: 'Download Power BI Report (.pbix)'
      },
      ar: {
        title: 'لوحة تحكم مبيعات وعمليات Super Store',
        subtitle: 'معمارية أداء العمليات والمبيعات التجارية',
        category: 'Power BI • نمذجة البيانات • DAX',
        gallery: [
          { src: 'assets/projects/superstore-overview.png', caption: 'شاشة النظرة العامة: خريطة المبيعات، أرباح الفئات، المبيعات حسب الشريحة ونمط الشحن' },
          { src: 'assets/projects/superstore-analyze.png', caption: 'شاشة التحليل: شجرة تفكيك المبيعات (المنطقة > الفئة)، ومخطط الدونات ومؤشرات الأهداف' },
          { src: 'assets/projects/superstore-table.png', caption: 'شاشة الجدول: بيانات أوامر الشراء التفصيلية والعملاء والفئات ونسب الخصم مع شرائح الفلترة' }
        ],
        problemStatement: 'كانت إدارة المبيعات تحتاج لدمج آلاف معاملات التجزئة بشكل دوري لتتبع الربحية حسب المنطقة الجغرافية وشرائح العملاء ووسائل الشحن. كانت العملية اليدوية تستغرق أكثر من 30 دقيقة لكل تقرير وتفتقر للقدرة على التفكيك والتحليل السريع.',
        methodology: 'تم بناء لوحة تحكم تفاعلية مؤتمتة بالكامل عبر Power Query لتنقية وتوحيد صفوف الطلبات والعملاء. تم تطبيق نموذج نجمي (Star Schema) مع هوامش ربح محسوبة وشرائح تصفية تفاعلية للولايات والفئات والسنوات والشهور في Power BI.',
        insights: [
          'تقليص وقت إعداد وتجميع التقارير الروتينية من 30 دقيقة إلى 5 دقائق فقط (توفير 83% من وقت العمل).',
          'تحديد آلات التصوير (Copiers: 56K$) والهواتف (Phones: 45K$) كأعلى الفئات ربحية.',
          'ساهمت المنطقة الغربية ($725K) والشرقية ($678K) بأكثر من 60% من إجمالي الإيرادات التجارية البالغة 2.30 مليون دولار.',
          'استحوذ الشحن العادي (Standard Class) على الحصة الكبرى من المبيعات ($1.36M)، مما يفتح مجالاً لتحسين اتفاقيات الشحن.',
          'حقق قطاع التكنولوجيا أعلى مساهمة في المبيعات بنسبة 36.4%.'
        ],
        kpis: [
          { label: 'إجمالي المبيعات المحللة', value: '2,297,200.86 دولار' },
          { label: 'صافي الأرباح المحققة', value: '286,400 دولار' },
          { label: 'هامش الربح الإجمالي', value: '12.47%' },
          { label: 'إجمالي الكميات المباعة', value: '38,000 وحدة' },
          { label: 'سرعة إعداد التقرير', value: '30 دقيقة &larr; 5 دقائق' }
        ],
        tools: ['Power BI Desktop', 'مقاييس DAX', 'تنظيف Power Query', 'نمذجة العلاقات', 'فلاتر تفاعلية'],
        downloadLabel: 'تحميل ملف تقرير الباور بي آي (.pbix)'
      },
      downloadFile: 'assets/files/Superstore_Dashboard.pbix'
    },

    'amazon-hr': {
      en: {
        title: 'Amazon HR Department Workforce & Attrition Dashboard',
        subtitle: 'Human Capital Analytics, Satisfaction & Retention Modeling',
        category: 'Microsoft Excel • Workforce Analytics • Pivot Charts',
        gallery: [
          { src: 'assets/projects/amazon-hr-department.png', caption: 'Department Analysis Tab: Average Evaluation by Department, Working Hours, and Promotions vs Projects' },
          { src: 'assets/projects/amazon-hr-overview.png', caption: 'HR Overview Tab: Department Staffing Distribution, Salary Distribution (High/Med/Low), and Work Accidents' }
        ],
        problemStatement: 'Corporate human resources executives needed visibility into departmental turnover indicators, workload distribution, and promotion parity across nearly 12,000 employees to mitigate talent attrition.',
        methodology: 'Ingested raw employee records into Excel, constructing normalized pivot calculation tables to compute satisfaction rates, monthly average hours worked, salary tier distributions, and correlation between project assignments and promotion velocity.',
        insights: [
          'Total workforce analyzed of 11,991 employees across 10 functional departments.',
          'Overall average satisfaction rate stands at 63% with average monthly commitment of 200.47 hours.',
          'Identified high attrition risk in Technical and Sales departments, correlating strongly with high working hours (>200h) and low 5-year promotion velocity.',
          'Low-salary tier accounts for 5,740 staff (47.8%) and medium-tier for 5,261 staff (43.8%), with only 990 employees in high-salary band.',
          'Sales department holds the highest project load (12,234 projects) and highest absolute promotion volume (58).'
        ],
        kpis: [
          { label: 'Total Workforce Modeled', value: '11,991 Employees' },
          { label: 'Mean Satisfaction Rate', value: '63.0%' },
          { label: 'Avg Monthly Hours', value: '200.47 Hours' },
          { label: 'Departments Tracked', value: '10 Departments' },
          { label: 'Salary Distribution', value: 'Low: 48% | Med: 44%' }
        ],
        tools: ['Microsoft Excel', 'Pivot Tables & Charts', 'Workforce Modeling', 'Interactive Slicers', 'Statistical Formulas'],
        downloadLabel: 'Download HR Excel Workbook (.xlsx)'
      },
      ar: {
        title: 'تحليلات الموارد البشرية ودوران العمالة لقسم موارد أمازون (HR)',
        subtitle: 'تحليلات رأس المال البشري ومعدلات الرضا والاحتفاظ بالموظفين',
        category: 'Microsoft Excel • تحليلات الموارد البشرية • مخططات محورية',
        gallery: [
          { src: 'assets/projects/amazon-hr-department.png', caption: 'شاشة تحليل الأقسام: متوسط التقييم، ساعات العمل الشهرية، ومعدل الترقيات مقارنة بعدد المشاريع' },
          { src: 'assets/projects/amazon-hr-overview.png', caption: 'شاشة النظرة العامة: تعداد الموظفين، توزيع الرواتب (مرتفع/متوسط/منخفض)، وحوادث العمل والمغادرة' }
        ],
        problemStatement: 'احتاجت الإدارة العليا للموارد البشرية إلى رؤية دقيقة لمؤشرات دوران العمالة وتوزيع أعباء العمل والترقيات لنحو 12 ألف موظف لتقليل معدلات مغادرة الكفاءات.',
        methodology: 'تمت معالجة سجلات الموظفين الأولية في إكسل وبناء جداول محورية لحساب معدلات الرضا، وساعات العمل الشهرية، وتوزيع فئات الرواتب، ونمذجة العلاقة بين أعباء المشاريع والترقيات.',
        insights: [
          'شمل التحليل 11,991 موظفاً موزعين على 10 أقسام وظيفية رئيسية.',
          'متوسط معدل الرضا العام للموظفين 63% بمتوسط ساعات عمل شهرية بلغت 200.47 ساعة.',
          'اكتشاف خطر دوران عمالة مرتفع في قسمي الدعم الفني والمبيعات نتيجة زيادة ساعات العمل مع بطء الترقيات خلال آخر 5 سنوات.',
          'تمثل شريحة الرواتب المنخفضة 5,740 موظفاً (47.8%) والمتوسطة 5,261 موظفاً (43.8%)، بينما لا تتجاوز الشريحة المرتفعة 990 موظفاً.',
          'تحمل قسم المبيعات أعلى عبء مشاريع (12,234 مشروعاً) وحصل على أعلى عدد ترقيات مطلقة (58 ترقية).'
        ],
        kpis: [
          { label: 'إجمالي الموظفين المحللين', value: '11,991 موظفاً' },
          { label: 'متوسط معدل الرضا', value: '63.0%' },
          { label: 'متوسط الساعات الشهرية', value: '200.47 ساعة' },
          { label: 'عدد الأقسام المدروسة', value: '10 أقسام' },
          { label: 'توزيع الرواتب', value: 'منخفض: 48% | متوسط: 44%' }
        ],
        tools: ['Microsoft Excel', 'الجداول والمخططات المحورية', 'نمذجة دوران العمالة', 'شرائح الفلترة', 'المعادلات الإحصائية'],
        downloadLabel: 'تحميل ملف إكسل الأصلي (.xlsx)'
      },
      downloadFile: 'assets/files/Amazon_HR_Dashboard.xlsx'
    },

    'sales-analytics': {
      en: {
        title: 'Sales Analytics & Representative Benchmarking Dashboard',
        subtitle: 'Commercial Revenue Velocity & Deal Segmentation Framework',
        category: 'Microsoft Excel • Sales Intelligence • Executive KPI Cards',
        gallery: [
          { src: 'assets/projects/sales-analytics-dashboard.png', caption: 'Quick Summary: Total Sales, Orders, Top Region, Rep Leaderboard, Monthly Trend, and Deal Sizing' }
        ],
        problemStatement: 'Sales leadership lacked an executive summary dashboard showing sales rep quotas, deal size distribution bands, and seasonal revenue trends across regional territories.',
        methodology: 'Structured transactional sales records with custom revenue buckets (0-1000, 1000-2000, 2000-3000, 3000-4000, >4000) and multi-select timeline slicers (Months, Regions, Quarters) to provide instant drill-down for commercial managers.',
        insights: [
          'Generated $438,636 in total sales across 195 closed orders and 369 distinct transactions.',
          'North region emerged as the primary sales engine generating $144,060 (33% of global total).',
          'Sales representative Ahmed Ali achieved peak performance with $105,442 in closed deals, followed closely by Kamran Ahmed ($95K).',
          'December exhibited the strongest seasonal revenue surge ($67K), following steady mid-year momentum ($56K in June).',
          'Transaction payment methods showed Credit Card as dominant (211 transactions), followed by Check (115) and Cash (43).'
        ],
        kpis: [
          { label: 'Total Net Sales', value: '$438,636' },
          { label: 'Total Orders Closed', value: '195 Orders' },
          { label: 'Leading Region (North)', value: '$144,060' },
          { label: 'Top Rep Sales (Ahmed Ali)', value: '$105,442' },
          { label: 'Peak Sales City (BAHAWA)', value: '$67,181' }
        ],
        tools: ['Microsoft Excel', 'Sales Analytics', 'Conditional Formatting', 'Interactive Slicers', 'KPI Dashboard'],
        downloadLabel: 'Download Sales Excel Workbook (.xlsx)'
      },
      ar: {
        title: 'لوحة تحليلات المبيعات ومقارنة أداء المندوبين',
        subtitle: 'هيكل قياس سرعة الإيرادات التجارية وتوزيع أحجام الصفقات',
        category: 'Microsoft Excel • ذكاء المبيعات • بطاقات المؤشرات التنفيذية',
        gallery: [
          { src: 'assets/projects/sales-analytics-dashboard.png', caption: 'ملخص سريع: إجمالي المبيعات، الطلبات، المنطقة المتصدرة، ترتيب المندوبين، والاتجاه الشهري' }
        ],
        problemStatement: 'كانت قيادة المبيعات تفتقر إلى لوحة ملخص تنفيذي توضح أداء المندوبين بالنسبة للمستهدفات، وشرائح أحجام الصفقات، والاتجاهات الموسمية للمبيعات عبر المناطق المختلفة.',
        methodology: 'تم تنظيم سجلات المبيعات في فئات إيرادية مخصصة (0-1000، 1000-2000، 2000-3000، 3000-4000، أكثر من 4000) مع شرائح تصفية زمنية وجغرافية متعددة الخيارات.',
        insights: [
          'تحقيق 438,636 دولاراً في إجمالي المبيعات عبر 195 صفقة مغلقة و 369 معاملة مالية.',
          'تصدرت المنطقة الشمالية (North) كأكبر محرك للمبيعات محققة 144,060 دولاراً (33% من الإجمالي).',
          'سجل مندوب المبيعات أحمد علي أعلى أداء بمبيعات بلغت 105,442 دولاراً، يليه كمران أحمد (95 ألف دولار).',
          'شهد شهر ديسمبر أقوى طفرة مبيعات موسمية بقيمة 67 ألف دولار، بعد أداء قوي في يونيو (56 ألف دولار).',
          'أظهرت طرق الدفع تفوق البطاقات الائتمانية (211 معاملة)، تليها الشيكات (115) ثم النقد (43).'
        ],
        kpis: [
          { label: 'صافي المبيعات الإجمالي', value: '438,636 دولار' },
          { label: 'عدد الطلبات المغلقة', value: '195 طلباً' },
          { label: 'المنطقة المتصدرة (الشمال)', value: '144,060 دولار' },
          { label: 'أعلى مبيعات مندوب (أحمد علي)', value: '105,442 دولار' },
          { label: 'أعلى مدينة مبيعاً (BAHAWA)', value: '67,181 دولار' }
        ],
        tools: ['Microsoft Excel', 'تحليلات المبيعات', 'التنسيق الشرطي', 'شرائح الفلترة التفاعلية', 'لوحة المؤشرات'],
        downloadLabel: 'تحميل ملف مبيعات إكسل (.xlsx)'
      },
      downloadFile: 'assets/files/Sales_Analytics_Dashboard.xlsx'
    }
  };

  /* ------------------------------------------------------------
     9. BILINGUAL CERTIFICATE DATA REGISTRY
     ------------------------------------------------------------ */
  const certDataRegistry = {
    'depi': {
      badge: 'assets/certificates/depi-cert.svg',
      en: {
        name: 'Junior Data Analyst Track',
        org: 'Digital Egypt Pioneers Initiative (DEPI)',
        period: 'Jul 2026 – Present',
        status: 'Ongoing Professional Training',
        description: 'Comprehensive professional workforce training program administered under the Ministry of Communications and Information Technology, covering data cleaning, business intelligence reporting, Power BI, SQL, and analytical decision support.',
        topics: [
          'Advanced Business Intelligence architecture & star-schema modeling in Power BI',
          'Complex data transformation, cleansing, and normalization using Power Query',
          'Relational database querying, joins, and data aggregation using SQL',
          'Enterprise dashboard design principles, stakeholder presentation, and KPI tracking'
        ]
      },
      ar: {
        name: 'مسار محلل البيانات المبتدئ (Junior Data Analyst Track)',
        org: 'مبادرة رواد مصر الرقمية (DEPI) • وزارة الاتصالات وتكنولوجيا المعلومات',
        period: 'يوليو 2026 – حتى الآن',
        status: 'تدريب مهني مستمر',
        description: 'برنامج تدريبي مهني متقدم برعاية وزارة الاتصالات وتكنولوجيا المعلومات يهدف إلى تأهيل الكفاءات الوطنية الشابة في مجالات تنقية البيانات، وإعداد تقارير ذكاء الأعمال المتقدمة، وتطبيقات Power BI و SQL، ودعم اتخاذ القرار المؤسسي المبني على البيانات.',
        topics: [
          'معمارية ذكاء الأعمال وتصميم النماذج النجمية في Power BI',
          'تحويل وتنقية البيانات المعقدة وتوحيد الجداول عبر Power Query',
          'استعلامات قواعد البيانات العلائقية والربط والتجميع عبر SQL',
          'مبادئ تصميم لوحات التحكم المؤسسية وتتبع مؤشرات الأداء الحيوية (KPIs)'
        ]
      }
    },

    'sql': {
      badge: 'assets/certificates/sql-cert.svg',
      en: {
        name: 'The Complete SQL Bootcamp (MySQL / Oracle)',
        org: 'Udemy',
        period: 'Course Completion',
        status: 'Course Completion Certificate',
        description: 'In-depth relational database architecture, query optimization, complex multi-table joins, subqueries, aggregation functions, window functions, and database administration with MySQL and Oracle Database environments.',
        topics: [
          'Relational database architecture, keys, constraints, and normalization (1NF - 3NF)',
          'Advanced multi-table joins: INNER, LEFT, RIGHT, FULL OUTER, and CROSS joins',
          'Subqueries, Common Table Expressions (CTEs), and complex aggregations',
          'Analytical Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG) for cohort analysis'
        ]
      },
      ar: {
        name: 'معسكر SQL الشامل (MySQL / Oracle Database)',
        org: 'Udemy',
        period: 'إتمام دورة معتمدة',
        status: 'شهادة إتمام معتمدة',
        description: 'دراسة معمقة وتطبيقية لمعمارية قواعد البيانات العلائقية، وتحسين الاستعلامات، وعمليات الربط المتعدد بين الجداول، والاستعلامات الفرعية، والدوال التحليلية المتقدمة في بيئتي MySQL و Oracle.',
        topics: [
          'معمارية قواعد البيانات وتطبيع الجداول وإنشاء المفاتيح والقيود (Constraints)',
          'عمليات الربط المتقدمة بين الجداول (INNER, LEFT, RIGHT, FULL OUTER, CROSS)',
          'الاستعلامات المتداخلة وجداول التعبيرات المشتركة (CTEs) والتجميع المركب',
          'دوال النوافذ التحليلية المتقدمة (ROW_NUMBER, RANK, LEAD, LAG) لتحليل الشرائح'
        ]
      }
    },

    'python': {
      badge: 'assets/certificates/python-cert.svg',
      en: {
        name: 'Python for Data Science and Machine Learning',
        org: 'Udemy',
        period: 'Course Completion',
        status: 'Course Completion Certificate',
        description: 'Exploratory data analysis, statistical operations, preprocessing pipelines, feature engineering, and supervised/unsupervised machine learning workflows using Python data science libraries.',
        topics: [
          'Data wrangling, matrix manipulation, and array operations using NumPy and Pandas',
          'Exploratory data visualization and statistical distribution plots using Matplotlib and Seaborn',
          'Data preprocessing, scaling, categorical encoding, and feature selection pipelines',
          'Supervised classification, linear/logistic regression, and clustering algorithm concepts'
        ]
      },
      ar: {
        name: 'بايثون لعلوم البيانات وتعلم الآلة (Data Science & ML)',
        org: 'Udemy',
        period: 'إتمام دورة معتمدة',
        status: 'شهادة إتمام معتمدة',
        description: 'التحليل الاستكشافي للبيانات، والعمليات الإحصائية المتقدمة، وخطوط المعالجة المسبقة، وهندسة الميزات وبناء النماذج التنبؤية باستخدام مكتبات بايثون المتخصصة في علم البيانات.',
        topics: [
          'معالجة وتنظيف المصفوفات والجداول الضخمة باستخدام NumPy و Pandas',
          'التصور البياني الاستكشافي ورسم التوزيعات الإحصائية عبر Matplotlib و Seaborn',
          'المعالجة المسبقة للبيانات والترميز الفئوي واختيار الميزات (Feature Selection)',
          'مبادئ خوارزميات التصنيف والانحدار الخطي واللوجستي والتجميع (Clustering)'
        ]
      }
    },

    'bue': {
      badge: 'assets/certificates/bue-cert.svg',
      en: {
        name: 'Artificial Intelligence Training Program',
        org: 'British University in Egypt (BUE)',
        period: 'Spring 2025',
        status: 'Academic Training Completion',
        description: 'Specialized intensive academic training in modern artificial intelligence algorithms, neural computing paradigms, predictive models, and ethical AI deployment scenarios.',
        topics: [
          'Fundamental artificial intelligence concepts, problem-solving search agents, and heuristic design',
          'Core machine learning algorithms, evaluation metrics (accuracy, precision, recall, F1)',
          'Introduction to deep learning, artificial neural network architectures, and activation functions',
          'Real-world AI deployment considerations, healthcare informatics integration, and ethics'
        ]
      },
      ar: {
        name: 'برنامج تدريب الذكاء الاصطناعي (AI Training Program)',
        org: 'الجامعة البريطانية في مصر (BUE)',
        period: 'ربيع 2025',
        status: 'إتمام برنامج أكاديمي تخصصي',
        description: 'تدريب أكاديمي مكثف ومتقدم على خوارزميات الذكاء الاصطناعي الحديثة، والحوسبة العصبية، والنماذج التنبؤية، وسيناريوهات التطبيق العملي في المجالات الصحية والتجارية.',
        topics: [
          'المفاهيم التأسيسية للذكاء الاصطناعي، ووكلاء البحث الذكي (Search Agents) والخوارزميات الحدسية',
          'خوارزميات تعلم الآلة الأساسية ومقاييس تقييم النماذج (Precision, Recall, F1)',
          'مقدمة في التعلم العميق (Deep Learning) ومعماريات الشبكات العصبية الاصطناعية',
          'اعتبارات نشر نماذج الذكاء الاصطناعي ودمجها في المعلوماتية الطبية وأخلاقيات البيانات'
        ]
      }
    }
  };

  /* ------------------------------------------------------------
     10. PROJECT MODAL CONTROLLER
     ------------------------------------------------------------ */
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const imageLightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  function openProjectModal(projectId) {
    const project = projectDataRegistry[projectId];
    if (!project) return;

    const data = project[currentLang] || project.en;
    const isRtl = currentLang === 'ar';

    // Build gallery HTML
    let galleryHtml = '';
    if (data.gallery && data.gallery.length > 0) {
      const mainImg = data.gallery[0];
      let thumbsHtml = '';
      data.gallery.forEach((item, index) => {
        thumbsHtml += `
          <button type="button" class="thumb-btn ${index === 0 ? 'active' : ''}" data-src="${item.src}" data-caption="${item.caption}">
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
          </button>
        `;
      });

      galleryHtml = `
        <div class="modal-gallery">
          <div class="modal-main-img-wrap" id="modalMainImgWrap" data-src="${mainImg.src}" data-caption="${mainImg.caption}">
            <img src="${mainImg.src}" alt="${mainImg.caption}" class="modal-main-img" id="modalMainImg">
            <span class="modal-img-zoom-hint"><i class="fa-solid fa-expand"></i> ${isRtl ? 'انقر للتكبير' : 'Click to Zoom'}</span>
          </div>
          <div class="modal-thumbnails" id="modalThumbs">
            ${thumbsHtml}
          </div>
        </div>
      `;
    }

    // Build insights list
    let insightsHtml = '';
    data.insights.forEach(insight => {
      insightsHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${insight}</span></li>`;
    });

    // Build KPI stack
    let kpisHtml = '';
    data.kpis.forEach(kpi => {
      kpisHtml += `
        <div class="m-kpi-item">
          <span class="m-kpi-lbl">${kpi.label}</span>
          <span class="m-kpi-val">${kpi.value}</span>
        </div>
      `;
    });

    // Build tools pills
    let toolsHtml = '';
    data.tools.forEach(tool => {
      toolsHtml += `<span>${tool}</span>`;
    });

    // Download action
    let downloadHtml = '';
    if (project.downloadFile) {
      downloadHtml = `
        <a href="${project.downloadFile}" download class="btn btn-primary btn-sm">
          <i class="fa-solid fa-file-arrow-down"></i> ${data.downloadLabel || (isRtl ? 'تحميل ملف المشروع' : 'Download File')}
        </a>
      `;
    }

    modalContent.innerHTML = `
      <div class="modal-header-block">
        <span class="section-tag">${data.category}</span>
        <h2 class="modal-project-title">${data.title}</h2>
        <p class="modal-project-subtitle">${data.subtitle}</p>
      </div>

      ${galleryHtml}

      <div class="modal-grid">
        <div class="modal-main-col">
          <h3 class="modal-section-title"><i class="fa-solid fa-circle-question"></i> ${isRtl ? 'المشكلة التحليلية والسياق التجاري' : 'Business Problem & Context'}</h3>
          <p class="modal-body-text">${data.problemStatement}</p>

          <h3 class="modal-section-title"><i class="fa-solid fa-gears"></i> ${isRtl ? 'المنهجية والنمذجة ومعالجة البيانات' : 'Analytical Methodology & Modeling'}</h3>
          <p class="modal-body-text">${data.methodology}</p>

          <h3 class="modal-section-title"><i class="fa-solid fa-lightbulb"></i> ${isRtl ? 'أبرز الرؤى والنتائج المستخرجة' : 'Key Analytical Insights'}</h3>
          <ul class="modal-insights-list">${insightsHtml}</ul>
        </div>

        <div class="modal-side-col">
          <div class="modal-side-card">
            <h4 class="modal-section-title"><i class="fa-solid fa-chart-column"></i> ${isRtl ? 'مؤشرات الأداء المحققة (KPIs)' : 'Verified KPIs'}</h4>
            <div class="modal-kpi-stack">${kpisHtml}</div>

            <h4 class="modal-section-title"><i class="fa-solid fa-wrench"></i> ${isRtl ? 'التقنيات والأدوات المستخدمة' : 'Technologies'}</h4>
            <div class="tech-stack-pills">${toolsHtml}</div>
          </div>
        </div>
      </div>

      <div class="modal-actions-bar">
        ${downloadHtml}
        <button type="button" class="btn btn-secondary btn-sm" id="modalDismissBtn">
          ${isRtl ? 'إغلاق المعاينة' : 'Close Preview'}
        </button>
      </div>
    `;

    // Attach thumbnail listeners
    const thumbBtns = modalContent.querySelectorAll('.thumb-btn');
    const mainWrap = modalContent.querySelector('#modalMainImgWrap');
    const mainImgEl = modalContent.querySelector('#modalMainImg');

    thumbBtns.forEach(tBtn => {
      tBtn.addEventListener('click', () => {
        thumbBtns.forEach(b => b.classList.remove('active'));
        tBtn.classList.add('active');
        const newSrc = tBtn.getAttribute('data-src');
        const newCap = tBtn.getAttribute('data-caption');
        mainImgEl.src = newSrc;
        mainImgEl.alt = newCap;
        mainWrap.setAttribute('data-src', newSrc);
        mainWrap.setAttribute('data-caption', newCap);
      });
    });

    if (mainWrap) {
      mainWrap.addEventListener('click', () => {
        const zoomSrc = mainWrap.getAttribute('data-src');
        const zoomCap = mainWrap.getAttribute('data-caption');
        openLightbox(zoomSrc, zoomCap);
      });
    }

    const dismissBtn = modalContent.querySelector('#modalDismissBtn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', closeProjectModal);
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  /* ------------------------------------------------------------
     11. CERTIFICATE MODAL CONTROLLER
     ------------------------------------------------------------ */
  const certModal = document.getElementById('certModal');
  const certModalCloseBtn = document.getElementById('certModalCloseBtn');
  const certModalContent = document.getElementById('certModalContent');

  function openCertModal(certId) {
    const cert = certDataRegistry[certId];
    if (!cert) return;

    const data = cert[currentLang] || cert.en;
    const isRtl = currentLang === 'ar';

    let topicsHtml = '';
    data.topics.forEach(t => {
      topicsHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${t}</span></li>`;
    });

    certModalContent.innerHTML = `
      <div class="cert-modal-header">
        <div class="cert-modal-badge">
          <img src="${cert.badge}" alt="${data.name}">
        </div>
        <span class="badge-status verified"><i class="fa-solid fa-circle-check"></i> ${data.status}</span>
        <h2 class="cert-modal-title">${data.name}</h2>
        <p class="cert-modal-org">${data.org} &bull; ${data.period}</p>
      </div>

      <div class="cert-modal-body">
        <h3 class="modal-section-title"><i class="fa-solid fa-graduation-cap"></i> ${isRtl ? 'وصف المنهج والبرنامج' : 'Program Description'}</h3>
        <p>${data.description}</p>

        <h3 class="modal-section-title"><i class="fa-solid fa-list-check"></i> ${isRtl ? 'المحاور والموضوعات التي تم تدريسها' : 'Topics & Competencies Covered'}</h3>
        <ul class="cert-topics-list">${topicsHtml}</ul>
      </div>

      <div class="modal-actions-bar" style="justify-content: center;">
        <button type="button" class="btn btn-secondary btn-sm" id="certDismissBtn">
          ${isRtl ? 'إغلاق المعاينة' : 'Close Details'}
        </button>
      </div>
    `;

    const dismissBtn = certModalContent.querySelector('#certDismissBtn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', closeCertModal);
    }

    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-cert-btn').forEach(card => {
    card.addEventListener('click', () => {
      const certId = card.getAttribute('data-cert');
      openCertModal(certId);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const certId = card.getAttribute('data-cert');
        openCertModal(certId);
      }
    });
  });

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertModal();
      }
    });
  }

  /* ------------------------------------------------------------
     12. LIGHTBOX HANDLER
     ------------------------------------------------------------ */
  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    imageLightbox.classList.add('active');
    imageLightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    imageLightbox.classList.remove('active');
    imageLightbox.setAttribute('aria-hidden', 'true');
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (imageLightbox) {
    imageLightbox.addEventListener('click', (e) => {
      if (e.target === imageLightbox) {
        closeLightbox();
      }
    });
  }

  // Global ESC key to close active modal or lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (imageLightbox.classList.contains('active')) {
        closeLightbox();
      } else if (certModal && certModal.classList.contains('active')) {
        closeCertModal();
      } else if (projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    }
  });

  /* ------------------------------------------------------------
     13. CLIPBOARD COPY UTILITY WITH TOAST
     ------------------------------------------------------------ */
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  document.querySelectorAll('[data-clipboard]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-clipboard');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(currentLang === 'ar' ? `تم نسخ "${textToCopy}" إلى الحافظة!` : `Copied "${textToCopy}" to clipboard!`);
      }).catch(() => {
        showToast(currentLang === 'ar' ? 'تعذر النسخ' : 'Unable to copy text');
      });
    });
  });

  const quickEmailBtn = document.getElementById('quickEmailBtn');
  if (quickEmailBtn) {
    quickEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'haneentarek7006@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(currentLang === 'ar' ? `تم نسخ البريد الإلكتروني (${email})` : `Copied email (${email}) to clipboard!`);
      });
    });
  }

  /* ------------------------------------------------------------
     14. CONTACT FORM HANDLERS (EMAIL & WHATSAPP)
     ------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('msgSubject').value.trim();
      const message = document.getElementById('msgBody').value.trim();

      if (!name || !email || !message) {
        showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
        return;
      }

      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const mailtoUrl = `mailto:haneentarek7006@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

      window.location.href = mailtoUrl;

      formStatus.className = 'form-status success';
      formStatus.textContent = currentLang === 'ar' 
        ? 'جاري فتح برنامج البريد الإلكتروني الخاص بك لإرسال الرسالة...' 
        : 'Opening your email client to send message... Thank you!';
      showToast(currentLang === 'ar' ? 'جاري فتح تطبيق البريد...' : 'Opening email client...');
    });
  }

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('msgSubject').value.trim();
      const message = document.getElementById('msgBody').value.trim();

      let waText = currentLang === 'ar' ? `مرحباً حنين،\n` : `Hello Haneen,\n`;
      if (name) waText += currentLang === 'ar' ? `أنا ${name}.\n` : `My name is ${name}.\n`;
      if (email) waText += currentLang === 'ar' ? `البريد: ${email}\n` : `Email: ${email}\n`;
      if (subject) waText += currentLang === 'ar' ? `الموضوع: ${subject}\n` : `Subject: ${subject}\n`;
      if (message) waText += currentLang === 'ar' ? `\nالرسالة:\n${message}` : `\nMessage:\n${message}`;

      const waUrl = `https://wa.me/201154125153?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      showToast(currentLang === 'ar' ? 'جاري فتح محادثة الواتساب...' : 'Opening WhatsApp chat...');
    });
  }

  /* ------------------------------------------------------------
     15. DYNAMIC FOOTER YEAR
     ------------------------------------------------------------ */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Expose public API for automated testing & programmatic control
  window.portfolioApp = {
    applyLanguage,
    setLanguage: applyLanguage,
    getCurrentLang: () => currentLang,
    openProjectModal,
    openCertModal,
    toggleTheme: () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('haneen_theme', newTheme);
      return newTheme;
    }
  };
});

