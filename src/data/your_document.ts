export const templateContent = `\documentclass[12pt,a4paper]{report}
\usepackage[utf8]{inputenc}
\usepackage[english]{babel}
\usepackage{mathptmx}
\usepackage{amsmath}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{hyperref}
\usepackage{fancyhdr}
\usepackage{wrapfig}
\usepackage{booktabs}
\usepackage{rotating}
\usepackage{lscape}
\usepackage{longtable}
\usepackage{multirow,bigstrut}
\usepackage{graphicx}
\usepackage{times}
\usepackage{tocloft}
\usepackage{fancybox}
\usepackage{listings}
\usepackage[a4paper,bindingoffset=0.2in,%
            left=1in,right=1in,top=1in,bottom=1in,%
            footskip=.25in]{geometry}
\usepackage[pagestyles]{titlesec}
\usepackage{setspace}
\usepackage{sectsty}
\usepackage{enumitem}
\usepackage{caption}
\usepackage{amsthm}
\usepackage{pdfpages}
\usepackage{algorithm}
\usepackage{algpseudocode,algorithm}
\usepackage[section]{placeins}
\captionsetup[table]{labelsep=space}
%\captionsetup[table]{skip=-4pt}
\setlength{\belowcaptionskip}{-6pt}
\captionsetup[figure]{skip=-4pt}
\pagestyle{fancy}
\fancyhf{}
\rhead{}
%%%%% Header part - Type your seminar title here %%%%%%%%%%%%
\rhead{\fontsize{8}{12} \selectfont {{paper_title}}}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\rfoot{\fontsize{8}{12} \selectfont \thepage}
\lfoot{\fontsize{8}{12} \selectfont Sahrdaya College of Engineering \& Technology, Kodakara }
\setlist{nosep}
\renewcommand{\footrulewidth}{}
\renewcommand{\headrulewidth}{}
\sectionfont{\fontsize{12}{15}\MakeUppercase\selectfont}
\subsectionfont{\normalfont\fontsize{12}{15}\selectfont}
\subsubsectionfont{\normalfont\fontsize{12}{15}\selectfont}
\parindent=0cm
\renewcommand{\cfttoctitlefont}{\normalfont\normalsize\bfseries\MakeUppercase}
\renewcommand{\cftloftitlefont}{\normalfont\normalsize\bfseries\MakeUppercase}
\renewcommand{\cftlottitlefont}{\normalfont\normalsize\bfseries\MakeUppercase}

\sectionfont{\fontsize{8}{15}}
\sectionfont{\MakeUppercase}

%\numberwithin{figure}{section}
%\numberwithin{table}{section}

\titleformat{\chapter}[display]
{\normalfont\huge\bfseries\centering}{\centering\chaptertitlename\ \thechapter}{14pt}{\huge}
\titlespacing*{\chapter}
{0pt}{50pt}{40pt}
 
\newpagestyle{mystyle}{\sethead{}{}{}\setfoot{}{\thepage}{}}
\pagestyle{mystyle}


\begin{document}
\pagenumbering{roman}
\renewcommand\bibname{REFERENCES}
\renewcommand*{\thepage}{\footnotesize\roman{page}} % For Roman Page No
\renewcommand{\figurename}{Fig.}







%%%%%%%%%%%COVER PAGE %%%%%%%%%%%%%%%%%%%%%
\begin{titlepage}
\newgeometry{left=1in,right=1in,top=1in,bottom=1in}
\begin{center}
\onehalfspacing
{\fontsize{18}{19}\selectfont \textbf{{{paper_title}}\\}} %CAPITAL LETTERS
 %CAPITAL LETTERS
\vspace{1 cm}
{\fontsize{16}{14}\selectfont A SEMINAR REPORT}\\
\vspace{0.6 cm}
\onehalfspacing
{\fontsize{14}{16}\selectfont Submitted by}	\\

\vspace{1 cm}

{\fontsize{16}{14}\selectfont \textbf{{{name_of_u}}}}
{\fontsize{16}{14}\selectfont \textbf{({{university_number}})}}\\

\vspace{0.2 cm}
to\\
\vspace{0.2 cm}
{\fontsize{14}{14}\selectfont the APJ Abdul Kalam Technological University\\ 
\vspace{0.3cm}in partial fulfillment of the requirements for the award of the Degree}\\
\vspace{0.5 cm}
of\\
\vspace{0.5 cm}
{\fontsize{14}{14}\selectfont \textit{Bachelor of Technology}\\ \textit{in}\\\textit{{{department}} and Engineering} }\\
\vspace{0.5 cm}

\onehalfspacing

\begin{figure}[hbtp]

\centering
\includegraphics[scale=1.2]{sahrdaya_logo.png}
\end{figure}
\vspace{0.5 cm}
\onehalfspacing
{\fontsize{16}{14}\selectfont \textbf{Department of {{department}} and Engineering}\\
\vspace{0.5cm}
SAHRDAYA COLLEGE OF ENGINEERING AND TECHNOLOGY\\
\vspace{0.2cm}
KODAKARA, THRISSUR - 680684}\\




\vspace{0.5cm}
{\fontsize{14}{16}\selectfont{\upshape {{month_of_making}}  {{year}}}}
\end{center}
\end{titlepage}




%%%%%%%%%%%%%%%%CERTIFICATE%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\begin{titlepage}
\newgeometry{left=1in,right=1in,top=1in,bottom=1in}
\onehalfspacing
\begin{center}
{\fontsize{16}{10}\selectfont\textbf{DECLARATION}}\\

\end{center}


\vspace{15pt}
\onehalfspacing
I, undersigned, hereby declare that the seminar report “{{paper_title}}”, submitted for
partial fulfillment of the requirements for the award of degree of Bachelor of
Technology of the APJ Abdul Kalam Technological University, Kerala is a bonafide
work done by me under the guidance of {{guide_name}}, {{guide_position}}, Department of {{department}}
Engineering. This submission represents my ideas in my own words and where ideas
or words of others have been included; I have adequately and accurately cited and
referenced the original sources. I also declare that i have adhered to the ethics of
academic honesty and integrity and have not misrepresented or fabricated any data or
idea or fact or source in my submission. I understand that any violation of the above
will be a cause for disciplinary action by the institute and/or the University and can
also evoke penal action from the sources which have thus not been properly cited or
from whom proper permission has not been obtained. This report has not been
previously formed the basis for the award of any degree, diploma or similar title of
any other University.

\begin{center}



\begin{flushright}

\singlespacing % Reset line spacing to 1 from here on

\textbf{{{name_of_u}}} \\

\vspace{20pt} 




 
  
\end{flushright}
\end{center}

\begin{flushleft}
\textbf{Kodakara}\\
\textbf{{{date_of_making}}}
\end{flushleft}

\end{titlepage}

%%%%%%%%%%%%%%%%CERTIFICATE%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\begin{titlepage}
\newgeometry{left=1in,right=1in,top=1in,bottom=1in}
\onehalfspacing
\begin{center}
{\fontsize{16}{10}\selectfont\textbf{DEPARTMENT OF {{department}} \& ENGINEERING}}\\
{\fontsize{14}{14}\selectfont\textbf{SAHRDAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, KODAKARA, THRISSUR}}\\
\end{center}



\begin{figure}[hbtp]

\centering
\includegraphics[scale=1.2]{sahrdaya_logo.png}
\end{figure}
\vspace{.1in}
\begin{center}
{\fontsize{16}{16}\selectfont\textbf{BONAFIDE CERTIFICATE}}\\
\vspace{.1in}
\end{center}

\doublespacing
This is to certify that the seminar report entitled \textbf{{{paper_title}}}
submitted by  \textbf{{{name_of_u}} ({{university_number}})} to the APJ Abdul Kalam Technological University in partial fulfillment of the requirements for the award of the Degree of Bachelor of Technology in {{department}} and Engineering is a bonafide record of the seminar work carried out by her under our guidance and supervision. This report in any form has not been submitted to any other University or Institute for any other purpose.

\begin{center}


%\singlespacing % Reset line spacing to 1 from here on
\vspace{12pt}
% if the project has Coguide tye use the following.
\begin{flushright}
% if the project has no coguide then use the style as given below for Guide
\vspace{6pt} 
 \singlespacing % Reset line spacing to 1 from here on
\textbf{GUIDE} \\
{{guide_name}} \\
{{guide_position}} \\
 \singlespacing % Reset line spacing to 1 from here on
 \textbf{SEMINAR COORDINATOR} \\
 {{seminar_coordinator_name}}\\
 {{seminar_coordinator_position}} \\

 \singlespacing % Reset line spacing to 1 from here on
 \textbf{HEAD OF THE DEPARTMENT} \\
 {{department_head_name}}  \\
 {{department_head_position}} \\
\end{flushright}
\end{center}
\vspace{-12pt} 
\begin{flushleft}
\textbf{Kodakara}\\
\textbf{02-11-2023}
\end{flushleft}

\end{titlepage}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%ACKNOWLEDGMENT%%%%%%%%%%%%%%%%%%%%%%%%


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\newpage
\pagestyle{plain}

\addcontentsline{toc}{section}{\textnormal{\textbf{ACKNOWLEDGMENT}}}
\begin{center}
\section*{ACKNOWLEDGMENT}
\end{center}
\onehalfspacing
\hspace*{0.5cm}I would like to express our immense gratitude and profound thanks to all those who helped me to make this project a great success. I express my gratitude to the almighty God for all the blessings endowed on me.\\

I express our sincere thanks to our Executive Director \textbf{Fr. Dr. Anto Chungath} and Principal \textbf{Dr. Nixon Kuruvila} for providing me with such a great opportunity.\\

I also convey my gratitude to our Head of the Department \textbf{{{department_head_name}}} for having given me a constant inspiration and suggestion. I extend my deep sense of gratitude to my seminar coordinator \textbf{{{seminar_coordinator_name}}}, {{seminar_coordinator_position}} of {{department}} \& Engineering Department for providing enlightening guidance through the project. I can hardly find words to express my deep appreciation for the help and warm encouragement that i have received from our seminar guide \textbf{{{guide_name}}}, {{guide_position}} of {{department}} \& Engineering Department for her whole-hearted support.\\

\hspace*{0.5cm}It was their encouragement that helped me to complete the project. I can hardly find words to express my deep appreciation of the help and warm encouragement that i received from my parents. I am extremely thankful and indebted to my friends who supported me in all aspects of the project work.\\
\vspace{1cm}





%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\newpage
\pagestyle{plain}

\addcontentsline{toc}{section}{\textnormal{\textbf{INSTITUTIONAL VISION, MISSION AND QUALITY POLICY}}}
\begin{center}

\section*{\normalsize{\textbf{INSTITUTIONAL VISION}}}

\end{center}
\doublespacing
Evolve as a leading technology institute to create high caliber leaders and innovators
of global standing with strong ethical values to serve the industry and society.\\
\section*{\hfil\normalsize{\textbf{INSTITUTIONAL MISSION}}\hfil}
Provide quality technical education that transforms students to be knowledgeable,
skilled, innovative and entrepreneurial professionals.
Collaborate with academia and industry around the globe, to strengthen the education
and research ecosystem.
Practice and promote high standards of professional ethics, good discipline, high
integrity and social accountability with a passion for holistic excellence.\\
\section*{\hfil\normalsize{\textbf{QUALITY POLICY}}\hfil}
We at Sahrdaya are committed to provide Quality Technical Education through continual improvement and by inculcating Moral \& Ethical values to mould into Vibrant Engineers with high Professional Standards.\\

We impart the best education through the support of competent \& dedicated faculties, excellent infrastructure and colloboration with industries to create ambience of excellence.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\newpage
\pagestyle{plain}

\addcontentsline{toc}{section}{\textnormal{\textbf{DEPARTMENTAL VISION, MISSION, PEOs ,PO AND PSOs}}}
\begin{center}

\section*{\normalsize{\textbf{Departmental Vision}}}

\end{center}
\doublespacing
\begin{longtable}{| p{.95\textwidth} |}
\hline
To be a nationally recognized center for quality education and research in diverse
areas of computer science engineering with a strong social commitment.
\\
\hline

\end{longtable}

\section*{\hfil\normalsize{\textbf{Department Mission}}\hfil}

\begin{longtable}{| p{.95\textwidth} |}
\hline
\begin{itemize}
\item Impart relevant technical knowledge,skills and attributes along with values and ethics.
\item Enhance creativity and quality in research through project based learning environment.
\item Mould Computer Science Engineering Professionals in synchronization with the dynamic industry requirements.
\item Inculcate essential leadership qualities coupled with commitment to the society.

\end{itemize}
\\
\hline

\end{longtable}
\section*{\hfil\normalsize{\textbf{Programme Educational Objectives (PEOs) }}\hfil}
\doublespacing

\begin{longtable}{| p{.15\textwidth} | p{.80\textwidth} |}
\hline
PEO1 & Take up challenging careers in suitable corporate, business or educational
sectors across the world, in multi-cultural work environment.
\\
\hline
PEO2 & Continuously strive for higher achievements in life keeping moral and ethical
values such as honesty, loyalty, good relationship and best performance, aloft.
 \\
\hline
PEO3 & Be knowledgeable and responsible citizens with good team-work skills,
competent leadership qualities and holistic values.
 \\
\hline


\end{longtable}

\vspace{3cm}

\section*{\hfil\normalsize{\textbf{Programme Specific Objectives (PSOs)}}\hfil}
\doublespacing

\begin{longtable}{| p{.15\textwidth} | p{.80\textwidth} |}
\hline
PSO1 & To nurture students with technically inquisitive attitude so that any real- world
problem could be tackled with a problem solving perspective, finding a suitable
mathematical model with strong fundamental technological concepts to solve
and apply to rapid growing arena of computer technology.
\\
\hline
PSO2 & To develop professionals with excellent exposure to the latest technologies to
design high quality products unique in innovation, technology, software,
security, hardware and usefulness; making high impact on society, business and technology.
 \\
\hline
PSO3 & To enhance knowledge in practical implementation of technology with regard
to  parallelism,  virtualization of networks,  scientific  analysis  and  modeling,
visualization,  natural language processing,  digital synthesis  of  data and  its
manipulation,  wireless and  mobile communication,  storage and retrieval  of
huge amount of data etc.
 \\
\hline


\end{longtable}

\section*{\hfil\normalsize{\textbf{Programme Outcomes (POs)}}\hfil}
\onehalfspacing

\begin{longtable}{| p{.15\textwidth} | p{.80\textwidth} |}
\hline
PO1 & Engineering knowledge: Apply the knowledge of mathematics, science,
engineering fundamentals, and an engineering specialization to the solution of
complex engineering problems.
\\
\hline
PO2 & Problem analysis: Identify, formulate, review research literature, and analyze
complex engineering problems reaching substantiated conclusions using first
principles of mathematics, natural sciences, and engineering sciences.
 \\
\hline
PO3 & Design/development of solutions: Design solutions for complex engineering
problems and design system components or processes that meet the specified
needs with appropriate consideration for the public health and safety, and the
cultural, societal, and environmental considerations.
 \\
\hline
PO4 & Conduct investigations of complex problems: Use research-based knowledge
and research methods including design of experiments, analysis and
interpretation of data, and synthesis of the information to provide valid
conclusions.
 \\
\hline
PO5 & Modern tool usage: Create, select, and apply appropriate techniques, resources,
and modern engineering and IT tools including prediction and modeling to
complex engineering activities with an understanding of the limitations.
 \\
\hline
PO6 & The engineer and society: Apply reasoning informed by the contextual
knowledge to assess societal, health, safety, legal and cultural issues and the
consequent responsibilities relevant to the professional engineering practice.
 \\
\hline
PO7 & Environment and sustainability: Understand the impact of the professional
engineering solutions in societal and environmental contexts, and demonstrate
the knowledge of, and need for sustainable development.
 \\
\hline
PO8 & Ethics: Apply ethical principles and commit to professional ethics and
responsibilities and norms of the engineering practice.
 \\
\hline
PO9 & Individual and team work: Function effectively as an individual, and as a
member or leader in diverse teams, and in multidisciplinary settings.
 \\
\hline
PO10 & Communication: Communicate effectively on complex engineering activities
with the engineering community and with society at large, such as, being able to
comprehend and write effective reports and design documentation, make
effective presentations, and give and receive clear instructions.
 \\
\hline
PO11 & Project management and finance: Demonstrate knowledge and understanding of
the engineering and management principles and apply these to one’s own work,
as a member and leader in a team, to manage projects and in multidisciplinary
environments.
 \\
\hline
PO12 & Life-long learning: Recognize the need for, and have the preparation and ability
to engage in independent and life-long learning in the broadest context of
technological change.

 \\
\hline

\end{longtable}
\vspace{2cm}
\section*{\hfil\normalsize{\textbf{COURSE OBJECTIVES }}\hfil}
\doublespacing


\begin{longtable}{| p{.98\textwidth} |}
\hline
\begin{itemize}
\item To do literature survey in a selected area of study.
\item To understand an academic document from the literate and to give a presentation about it.
\item To prepare a technical report.

\end{itemize}
\\
\hline



\end{longtable}



\section*{\hfil\normalsize{\textbf{COURSE OUTCOMES }}\hfil}
\doublespacing
The student will be able to
\begin{longtable}{| p{.15\textwidth} | p{.80\textwidth} |}
\hline
CO1 & Identify academic documents from the literature which are related to her/his areas of interest.
\\
\hline
CO2 & Read and apprehend an academic document from the literature which is related to her/ his areas of interest.
 \\
\hline
CO3 & Prepare a presentation about an academic document Cognitive knowledge.
 \\
\hline
CO4 & Give a presentation about an academic document. 
 \\
\hline
CO5 & Prepare a technical report.
 \\
\hline
\end{longtable}

%%%%%%%%%%%%%%%%%%%%ABSTRACT%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\newpage
\addcontentsline{toc}{section}{\textnormal{\textbf{ABSTRACT}}}
\begin{center}
 \section*{\Large{\textbf{ABSTRACT}}}
\end{center}
\onehalfspacing

\hspace*{0.5cm}{{paper_abstract}}\par

%your abstract here.................minimum 60 words.
%single paragraph. 
%brief about the work you are doing,results you got.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



%%%%%%%%%%%%%%%%%%%%ABSTRACT%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%








%%%%%%%%%%%%%%CONTENTS%%%%%%%%%%%%%
\newpage
\pagestyle{empty}
\begin{center}
\tableofcontents 
\end{center}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%% List of tables %%%%%%%%%%%%%%%%%%%




%%%%%%%%%%%List of Fig%%%%%%%%%%%%%%%%%%%%%
\newpage
{\setlength{\baselineskip}{1\baselineskip}
\begin{center}	
\listoffigures				%for adding list of figures
\end{center}		
\addcontentsline{toc}{section}{LIST OF FIGURES}
}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\newpage
\pagestyle{plain}

\begin{center}
\section*{\large{ LIST OF ABBREVIATIONS}}		%for adding list of Abbreviations
\end{center}

\addcontentsline{toc}{section}{LIST OF ABREVIATIONS}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% You can list the abbreviations in your work here. It is shown as table. Type the Abbreviation in the first column and expansion in the second column. 
\pagestyle{plain}
\vspace{1cm}
\begin{center}
\begin{table}[h!]
 \begin{tabular}{p{8cm}p{8cm}}
  \textbf{ABBREVIATION} & \textbf{DESCRIPTION} \\[0.1cm]
  \\
DNN& Deep Neural Network\\ 
\\
ROI&Region of Interest\\
\\
CNN& Convolutional Neural Network\\
\\
GPU&Graphics Processing Unit\\
\\ 
HOG&Histogram of Oriented Gradients\\
\\
SSD&Single Shot Detector\\
\\
IoU&Intersection over Union\\
\\
ADAS&Advanced Driver Assistance Systems\\
\\
SGD&Stochastic Gradient Descent\\
\\

\end{tabular}
\end{table}
\end{center}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Use \par at the end of each paragraph. You can give intend by giving \hspace{1 cm} at the beginning of each paragraph.
\newpage

\pagenumbering{arabic}

\renewcommand{\chaptername}{CHAPTER}
\chapter{INTRODUCTION}
\thispagestyle{fancy}
\pagestyle{fancy}
\renewcommand*{\thepage}{\footnotesize\arabic{page}} % 
\onehalfspacing

\setlength{\parindent}{5ex}
\hspace*{1cm}
{{Introduction_content_of_paper}}
\section{GENERAL BACKGROUND}
\hspace*{1cm}  
{{background_content_of_paper}}
\section{PROBLEM DEFINITION}
\hspace*{1cm}
{{problem_definition_content_of_paper}}
\section{MOTIVATION}
\hspace*{1cm}
{{motivation_content_of_paper}}

 \section{OBJECTIVES}
The objectives of this work are as follows:
 \begin{itemize}

\item {{objective_point_1_of_paper}}

\item {{objective_point_2_of_paper}}

\item {{objective_point_3_of_paper}}

\item {{objective_point_4_of_paper}}

\item {{objective_point_5_of_paper}}

\item {{objective_point_6_of_paper}}

\item {{objective_point_7_of_paper}}

\item {{objective_point_8_of_paper}}

\item {{objective_point_9_of_paper}}

\item {{objective_point_10_of_paper}}

\end{itemize}
 \section{SCOPE}
 \hspace*{1cm}
 {{scope_content_of_paper}}
%%%%%%%%%%%%%%%%%%%%%%% LITERATURE SURVEY %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\chapter{LITERATURE SURVEY}
\thispagestyle{fancy}
\onehalfspacing
\section{POTHOLE AND BUMP DETECTION USING WAVELET TRANSFORMATIONS}


{\bfseries Authors}:Bello-Salau, H.; Aibinu, A.M.; Onumanyi, A.J.

{\bfseries Introduction}:Bello-Salau et al. (2018) proposed a method for detecting road anomalies, including potholes and speed bumps, using wavelet transformations. This system focuses on processing accelerometer data from vehicles and applying wavelet transformations to identify patterns associated with road anomalies. The method aims to provide a real-time detection solution that is both accurate and computationally efficient.

{\bfseries Implementation}:
The system collects accelerometer data as the vehicle drives over road anomalies. Wavelet transformations are used to analyze the data, breaking it down into multiple scales to detect both large and small anomalies. The system then correlates the wavelet coefficients across different scales to accurately detect anomalies. With an accuracy of 94-96\%, this method provides a reliable solution for real-time anomaly detection without the need for complex image processing systems.

{\bfseries Challenges and Limitations:}:The wavelet-based approach is highly sensitive to vehicle speed and road conditions, which can introduce noise into the accelerometer data. Additionally, the system cannot predict anomalies ahead of time and is limited to detecting those that have already been encountered. Integration with GPS data can improve the system’s predictive capabilities, but this adds to the complexity and cost of deployment.

\section{AUTOMATIC ROAD ANOMALY DETECTION USING SMART MOBILE DEVICES}
{\bfseries Authors} : Al-Shargabi, B.; Hassan, M.; Al-Rousan, T.

{\bfseries Introduction}: This work by Al-Shargabi et al. explores the use of accelerometers in smartphones to detect road anomalies such as potholes and speed bumps. The system leverages the widespread availability of smartphones to provide a low-cost, scalable solution for road anomaly detection. The method records acceleration data as the vehicle passes over irregularities, allowing the system to detect anomalies based on deviations in the acceleration patterns. The system aims to be user-friendly and easily deployable in real-time applications. \par\par

{\bfseries Implementation}: The core of the system relies on the Z-DIFF algorithm, which analyzes triaxial accelerometer data to differentiate between normal driving conditions and encounters with road anomalies. This data is collected using a mobile device mounted in the vehicle. The system compares acceleration readings in the X, Y, and Z directions to detect significant deviations caused by road anomalies. The experimental results showed a true positive rate of 90\% for pothole detection, demonstrating the effectiveness of the method in identifying road irregularities. However, the system's limitation is that it can only detect anomalies after they have been encountered, and it relies heavily on the positioning and orientation of the smartphone.\par\par

{\bfseries Challenges and Limitations}: While the method is easy to implement and cost-effective, it has several limitations. For example, its accuracy depends on the proper placement of the smartphone in the vehicle, and the system cannot predict anomalies ahead of time. Furthermore, factors like the speed of the vehicle and road conditions can introduce noise into the data, requiring advanced filtering techniques to maintain accuracy

\section{DETECTION OF PAVEMENT DISTRESS USING NEURAL NETWORKS}

{\bfseries Authors}: Salari, E.; Yu, X.

{\bfseries Introduction} :
Salari and Yu (2011) developed a neural network-based system for detecting pavement distress using image processing techniques. Their approach focuses on analyzing road surfaces to identify signs of damage, such as cracks, potholes, and other deformities. By utilizing images captured from cameras mounted on vehicles, the system applies machine learning algorithms to detect pavement distress, achieving a high level of accuracy.\par

{\bfseries Implementation} : The system captures road surface images and uses a neural network for image segmentation. The process involves pre-processing the images to enhance features like cracks and deformations. A genetic algorithm is then used to optimize the thresholds for detecting pavement distress. The neural network classifies the segmented images into categories such as damaged and non-damaged areas. Salari and Yu's model achieved a 97\% detection accuracy in classifying road surface conditions, significantly improving upon traditional manual inspection methods. Additionally, the system can function under various lighting and weather conditions, making it a robust solution for real-time road monitoring.\par

{\bfseries Challenges and Limitations}:
While the system performs well in detecting distress on well-maintained roads, it struggles with heavily deteriorated surfaces where multiple types of damage may overlap. Furthermore, the computational cost of running the neural network in real-time poses a challenge, particularly for resource-constrained devices. The system also requires a substantial dataset for training, which may not always be readily available.


\section{REAL-TIME SPEED BUMP DETECTION USING STEREO VISION}


{\bfseries Authors}:Varma, V.S.K.P.; Adarsh, S.; Ramachandran, K.I.


{\bfseries Introduction}:Varma et al. (2018) introduced a novel method for detecting speed bumps using stereo vision and deep learning. Their system is designed to function in real-time, providing crucial information to autonomous vehicles or Advanced Driver Assistance Systems (ADAS) to ensure safe navigation over speed bumps. The model uses ZED stereo cameras to capture 3D data and applies a deep learning model to detect the presence of speed bumps, including unmarked ones, which pose significant risks to vehicles.

{\bfseries Implementation}:The system's core technology is a Mobilenet-SSD deep learning model. Stereo cameras capture 3D images of the road, and these images are processed by the convolutional neural network (CNN) to identify speed bumps. The model is trained on a dataset that includes various types of speed bumps, both marked and unmarked, as well as other road features. The stereo camera provides depth information, allowing the system to estimate the distance to the detected speed bump. With an accuracy rate of 97.4\%, the system provides real-time feedback to the vehicle's control system, enabling timely deceleration and smooth navigation over speed bumps.

{\bfseries Challenges and Limitations}:
Although highly accurate, the system requires high-quality stereo cameras, which may increase the cost of deployment in consumer vehicles. Additionally, the system’s performance can degrade under adverse weather conditions, such as rain or fog, which affect the quality of the captured images. The computational demands of running a CNN in real-time also pose a challenge, particularly for embedded systems with limited processing power.


\section{SPEED BUMP DETECTION USING GAUSSIAN MIXTURE MODEL}


{\bfseries Authors}:Srimongkon, S.; Chiracharit, W.

{\bfseries Introduction}:Srimongkon and Chiracharit (2017) presented a method for speed bump detection using a Gaussian Mixture Model (GMM). The system aims to detect speed bumps on roads by analyzing images of road surfaces and identifying characteristic patterns associated with speed bumps. This approach is particularly useful in environments where speed bumps are not clearly marked, which can lead to vehicle damage or accidents.

{\bfseries Implementation}:
The system captures road surface images using a camera mounted on the vehicle. A Gaussian Mixture Model is applied to segment the images based on color and texture patterns. Speed bumps, which often have a distinct stripe pattern, are identified by analyzing the segmented regions. Morphological operations are used to refine the detection, ensuring that only valid speed bumps are detected. The system was tested under various lighting conditions, including day and night, achieving a detection accuracy of 94.7\%.

{\bfseries Challenges and Limitations:}:The GMM-based approach is highly dependent on the visibility of speed bump markings. In cases where the markings are faded or absent, the system’s accuracy decreases. Additionally, the model struggles with detecting speed bumps that are the same color as the surrounding road surface. These limitations make the system less effective in environments where speed bumps are poorly maintained or unmarked.




%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\chapter{SYSTEM ANALYSIS}
\thispagestyle{fancy}
\onehalfspacing
\section{EXPECTED SYSTEM REQUIREMENTS }


To ensure optimal functionality and performance of the Speed Bump and Pothole Detection system using Deep Neural Networks, the following system requirements must be carefully considered:
\begin{enumerate}
  \item {\bfseries Hardware Requirements:}

\begin{itemize}
    \item GPU Configuration:
    \begin{itemize}
       \item For training the deep neural network, a GPU configuration with a GTX 1080 Ti or equivalent is recommended.
        
        \item The system should support parallel processing for efficient model training.
    \end{itemize}
    \item Additional Requirements:

    \begin{itemize}
           \item Adequate system memory (RAM) to handle large image datasets.
            
            \item Sufficient storage capacity for storing image data and model checkpoints.
    \end{itemize}

\end{itemize}

\item  {\bfseries Software Requirements:}

\begin{itemize}
    \item Deep Learning Frameworks: MATLAB 2019a with Deep Learning toolbox for implementing and training the neural network.

\item Operating System:Windows 10 Pro or compatible operating system.

\end{itemize}

\item  {\bfseries Input and Output Devices:}
   \begin{itemize}
       \item Image Capture Device:ZED stereoscopic camera for capturing high-quality road images.

       \item Display Devices:Suitable display for visualizing detection results and model performance.
   \end{itemize}

   \item  {\bfseries Data Requirements:}
   \begin{itemize}
       \item  Image Dataset:A diverse dataset of road images containing speed bumps, potholes, and normal road conditions.

       \item Image Resolution:Images with a resolution of 376 × 672 pixels.
   \end{itemize}

\end{enumerate}


\section{FEASIBILITY ANALYSIS }
\subsection{ TECHNICAL FEASIBILITY}

The technical feasibility analysis for the Speed Bump and Pothole Detection system focuses on the following aspects:\par
{\baselineskip}

\item {\bfseries Availability of Technology } :
MATLAB with Deep Learning toolbox is readily available and suitable for implementing the proposed convolutional neural network.The ZED stereoscopic camera is a commercially available device capable of capturing the required image data.\par
{\baselineskip}


\item {\bfseries Expertise and Skills }:
The project requires expertise in deep learning, image processing, and MATLAB programming. The research team demonstrates the necessary skills to develop and implement the system. \par
{\baselineskip}


\item {\bfseries Hardware and Software Requirements }:
The specified hardware (Intel Core i9-10900X CPU, GTX 1080 Ti GPU) meets the computational demands of the project.MATLAB 2019a provides the required software environment for model development and training.\par
{\baselineskip}


\item {\bfseries Data Processing and Storage }:
The system can handle the processing and storage of 714 labeled images, which is sufficient for initial model training and validation.\par
{\baselineskip}


\item {\bfseries Scalability and Performance }:The lightweight architecture (7 layers) of the proposed neural network allows for potential deployment on embedded systems, indicating good scalability.
The achieved accuracy of 98.13\% demonstrates high performance in detecting speed bumps and potholes.
\par{\baselineskip}



\item {\bfseries Testing and Validation }: The research includes a comprehensive testing methodology, comparing multiple model architectures to identify the best-performing configuration.
\par{\baselineskip}
 
\par


\subsection{ HARDWARE REQUIREMENTS}

The hardware configuration essential for developing and implementing the Speed Bump and Pothole Detection system includes: \par
{\baselineskip}


\item {\bfseries Graphics Processing Unit (GPU) } :
 NVIDIA GTX 1080 Ti or comparable GPU for accelerated neural network computations.\par
{\baselineskip}


\item {\bfseries Memory (RAM) }:
Sufficient RAM (16GB or higher recommended) to handle image processing and model training tasks. \par
{\baselineskip}


\item {\bfseries Storage }:
Adequate storage capacity for the image dataset, model checkpoints, and result data.
\par
{\baselineskip}


\item {\bfseries Processor }:
Intel(R) Core(TM) i9-10900X CPU @ 3.70 GHz or equivalent for efficient data processing and model training.\par
{\baselineskip}

\item {\bfseries Image Capture Device}:
ZED stereoscopic camera for high-quality road image acquisition.
\par
\vspace{\baselineskip}


\subsection{ SOFTWARE REQUIREMENTS}

The software requirements for the Speed Bump and Pothole Detection system include:\par
{\baselineskip}

\item {\bfseries MATLAB } :
MATLAB 2019a with Deep Learning toolbox for implementing the convolutional neural network and processing image data.
\par{\baselineskip}


\item {\bfseries Operating System }:
Windows 10 Pro or compatible operating system that supports MATLAB and required drivers for the GPU and ZED camera.\par
{\baselineskip}


\item {\bfseries Image Processing Libraries }:
MATLAB Image Processing Toolbox for additional image manipulation and analysis tasks.\par
{\baselineskip}


\item {\bfseries Version Control }:
Git or similar version control system for managing code development and collaboration.\par{\baselineskip}


\item {\bfseries Data Annotation Tools }:
 Software for labeling and annotating road images.
\par\vspace{\baselineskip}

These specifications provide a comprehensive framework for the development and implementation of the Speed Bump and Pothole Detection system, ensuring compatibility, accessibility, and seamless integration of essential tools and platforms.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\chapter{METHODOLOGY}
\thispagestyle{fancy}

The methodology employed for the Speed Bump and Pothole Detection Using Deep Neural Network revolves around the design, development, and training of a lightweight neural network architecture optimized for image processing. The key steps are outlined below:\par
\begin{enumerate}
\vspace{.2cm}
    \item {\bfseries Image Acquisition and Dataset Construction:}
    The research begins with capturing road surface images using a ZED stereo camera mounted on the front of a vehicle. A dataset of 714 images, labeled into three categories—speed bumps (both marked and unmarked), potholes, and smooth roads—was constructed. The images were captured in real-world road conditions in Celaya, Mexico, at a resolution of 376x672 pixels. The dataset was split into 70\% for training and 30\% for validation.

    \vspace{.2cm}
    
    \item {\bfseries Neural Network Architecture: }The architecture of the deep neural network (DNN) consists of seven layers. This lightweight design allows for the efficient processing of high-resolution images. The architecture includes convolutional layers without pooling, thus retaining all the essential information from the input images. The DNN uses 37 convolution filters of size 3x3 to capture road anomalies such as speed bumps and potholes.

    \vspace{.2cm}
    
    \item {\bfseries  Training and Optimization:} The network was trained using Stochastic Gradient Descent with Momentum (SGDM) to optimize weights over several epochs. Batch normalization and the ReLU activation function were applied to accelerate training and prevent vanishing gradients. Cross-entropy loss was used as the primary loss function, with the goal of maximizing the classification accuracy.

    \vspace{.2cm}
    
    \item {\bfseries Validation and Testing: } After training, the system achieved an accuracy of 98.13\%, significantly outperforming other models like Maeda et al. (77\%) and Asad et al. (95\%). The absence of pooling layers ensured that critical details in the images were preserved, contributing to this high accuracy. The model's performance was evaluated using standard accuracy metrics, and various configurations of filter sizes and quantities were tested to find the optimal solution.
       
\vspace{.2cm} This structured methodology allows for accurate and efficient detection of road anomalies, supporting both autonomous and human driving systems.




\end{enumerate}

\section{PROPOSED SYSTEM}
The proposed system introduces a real-time solution for detecting road anomalies, specifically speed bumps and potholes, using a deep neural network trained on high-resolution images captured by a ZED stereo camera. The key innovations of the system are described as follows:
\begin{enumerate}
    \item {\bfseries Image Acquisition and Preprocessing:}
Images are captured in real-time using a ZED stereo camera mounted on the front of the vehicle. These images are preprocessed by manually labeling them into three categories: speed bumps, potholes, and smooth roads. This preprocessing ensures that the dataset is balanced and free from noise caused by environmental factors, such as sunlight.

\vspace{.2cm}

  \item {\bfseries Neural Network Architecture}The DNN is designed with seven layers, optimized for real-time processing. It uses 3x3 convolution filters, without stride or pooling, to capture all relevant features from the road images. Batch normalization is applied to accelerate training, and the ReLU function is used for non-linearity. The absence of pooling ensures no loss of crucial road features in the process.

  \vspace{.2cm}
  
  \item {\bfseries Real-Time Detection and Classification:}
The system is deployed for real-time road anomaly detection, capable of identifying speed bumps and potholes with a high degree of accuracy. The output is a classification of the road surface, allowing for integration into advanced driver assistance systems (ADAS) or autonomous vehicle systems.

\vspace{.2cm}

  \item {\bfseries Training Process:} The system's performance is optimized through training on a balanced dataset of images captured under diverse road conditions. Using SGDM and cross-entropy loss, the system learns to differentiate between road anomalies with high accuracy, making it suitable for real-world deployment.
  
  \vspace{.1cm}
  
 This system provides a robust, real-time solution for road anomaly detection, enhancing both vehicle safety and passenger comfort.
\end{enumerate}

\section{MODULAR DECOMPOSITION}
The proposed system is modularly decomposed to facilitate independent development, optimization, and maintainability. The key modules are described below:
\begin{enumerate}
    \item {\bfseries Image Acquisition Module:}

This module captures high-resolution images of the road surface using the ZED stereo camera. It is designed to operate in real-time, ensuring that every frame captures accurate road conditions. This module forms the foundation of the system by providing the data necessary for detection.

\vspace{.2cm}

 \item {\bfseries Feature Extraction Module:}

The neural network processes the input images through multiple convolutional layers to extract relevant features. The absence of pooling layers ensures that important features related to road anomalies, such as the shape and texture of potholes and speed bumps, are retained for classification.

\vspace{.2cm}

 \item {\bfseries Classification Module:}

This module applies the softmax function to classify the road surface based on the extracted features. It assigns probabilities to each category (speed bump, pothole, smooth road), allowing for accurate detection. This classification is critical for real-time decision-making in autonomous systems.

\vspace{.2cm}

 \item {\bfseries Training and Adaptation Module:}

 The training module handles the iterative process of optimizing the network's weights. Using SGDM, it adjusts parameters to ensure that the model adapts to varying road conditions and anomalies. This module ensures that the system continues to improve as more data is processed.

\vspace{.2cm}
 
 \item {\bfseries Real-Time Detection Module:}
This module integrates the trained model into an onboard system, allowing for real-time detection and classification of road anomalies. The lightweight nature of the DNN makes it suitable for implementation in both high-performance and embedded systems.

\vspace{.2cm}

 \item {\bfseries Overall System Integration Module:}

This module coordinates the operations of all other modules, ensuring seamless communication and functionality. It allows the system to operate as a cohesive unit, ensuring real-time detection and classification in diverse road conditions.

\end{enumerate}
\vspace{.01cm}
This modular approach simplifies the system’s maintenance and optimization, allowing for scalability and upgrades as new features or technologies are introduced.


\newpage
\section{ALGORITHM}

\begin{algorithm}[H]
\caption{Real-time Detection Phase}
\begin{algorithmic}[1]
\Procedure{DetectionPhase}{}
    \While{vehicle is in motion}
        \State Capture image from ZED camera
        \State Preprocess image (normalize)
        \State $\text{prediction} \gets \text{TrainedModel}(\text{capturedImage})$
        \If{prediction == ``Speed Bump''}
            \State Label image as ``Speed Bump''
        \ElsIf{prediction == ``Pothole''}
            \State Label image as ``Pothole''
        \Else
            \State Label image as ``Normal Road''
        \EndIf
        \State Store detection result (image, label, timestamp)
    \EndWhile
    \If{Exit command is received}
        \State Terminate detection phase
    \EndIf
\EndProcedure
\end{algorithmic}
\end{algorithm}


\newpage
\section{ADVANTAGES OF PROPOSED SYSTEM}
\begin{enumerate}
    \item {\bfseries High Accuracy Detection:  }

The Model achieves a precision of 98.13\% using a deep neural network, which significantly improves the accuracy compared to existing models.
\vspace{.2cm}

 \item {\bfseries Ability to Detect Marked and Unmarked Speed Bumps:}
 Unlike many previous models, the system effectively detects both marked and unmarked speed bumps, making it suitable for real-world scenarios where not all speed bumps are well-marked.
 
 \vspace{.2cm}
 
 \item {\bfseries Balanced Detection for Potholes and Speed Bumps: }

The model can accurately detect both potholes and speed bumps, offering a balanced detection capability that enhances road safety.

\vspace{.2cm}

 \item {\bfseries Efficient Image Processing: }

The system utilizes a deep neural network without stride or pooling operations, allowing it to retain detailed information from images and ensure high-quality analysis.

\vspace{.2cm}

 \item {\bfseries Scalable Architecture: }

The lightweight architecture of the neural network, with only seven layers, makes it adaptable for implementation in embedded and high-performance computing systems.

\vspace{.2cm}

 \item {\bfseries Generalization Ability: }

The system's approach to data augmentation and batch normalization enhances its ability to generalize across different scenarios, increasing the reliability of its predictions.

\vspace{.2cm}

 \item {\bfseries Real-World Application Compatibility: }

Designed for real-time applications, the system can be used in autonomous vehicles and Advanced Driver Assistance Systems (ADAS) to enhance road safety by detecting road anomalies promptly.

\end{enumerate}

%================================================





%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\chapter{SYSTEM DESIGN}
\thispagestyle{fancy}
\onehalfspacing

\section{ARCHITECTURE DESIGN}
\begin{figure}[hbtp]
    \centering
    \includegraphics[scale=0.6]{flowchart.png}
    \vspace{1cm}
    \caption{ Architecture Design}
    \label{fig: Architecture}
\end{figure}
The architecture design of the complete speed bump and pothole detection system involves several key components, focusing on the integration of the deep neural network (DNN) with the image data captured by the ZED camera. The architecture ensures that real-time road anomaly detection is both efficient and accurate.

\begin{enumerate}
    \item {\bfseries Image Preprocessing:}
    \begin{itemize}
        \item Functionality: Prepares raw images captured by the ZED camera for input into the deep neural network. This includes resizing the images, normalizing pixel values, and eliminating noise for optimal feature extraction.
    
    
        \item Architecture: Utilizes preprocessing algorithms such as image resizing (to 376x672 pixels) and normalization to ensure uniform input for the neural network. These steps are essential to maintain consistency across varying lighting and environmental conditions in the dataset.


    \end{itemize}
  \item {\bfseries Convolutional Neural Network (CNN) for Image Classification:}

\begin{itemize}
\item Functionality: Detects and classifies road anomalies (speed bumps, potholes, and normal roads) from the preprocessed images.

\item Architecture: The network employs 37 convolutional filters (3x3) with ReLU activation and batch normalization. The CNN extracts key image features without losing critical details by avoiding stride and pooling operations, enhancing detection accuracy.
\end{itemize}
  \item {\bfseries Data Augmentation and Training:}

\begin{itemize}
\itemFunctionality: Increases dataset diversity through techniques like image rotation, flipping, and zooming to ensure the model remains robust in different driving conditions.

\item Architecture: The training pipeline is augmented using stochastic gradient descent (SGD) with momentum. The model is trained on 70\% of the dataset and validated on the remaining 30\%. This method enhances the network’s generalization ability and prevents overfitting.
\end{itemize}

\item {\bfseries Post-Processing and Classification:}

\begin{itemize}
    \item Functionality: After classification by the CNN, the system determines whether the input contains a speed bump, pothole, or a normal road segment. The post-processing step ensures actionable outputs, such as warnings or speed adjustments in Advanced Driver Assistance Systems (ADAS).


    \item Architecture: Uses a fully connected layer and a SoftMax function to map the network’s output into probability distributions for each class (speed bump, pothole, normal road).

 \end{itemize}
\end{item}
\end{enumerate}

\section{NEURAL NETWORK ARCHITECTURE DESIGN}
\begin{figure}[hbtp]
    \centering
    \includegraphics[scale=0.6]{architecture.png}
    \vspace{1cm}
    \caption{CNN Architecture diagram}
    \label{fig:MOS Prediction Model Architecture}
\end{figure}
The architecture design of the deep neural network (DNN) used in the speed bump and pothole detection system involves a lightweight yet effective convolutional neural network (CNN) that processes images and classifies road anomalies with high accuracy.

\begin{enumerate}
    \item {\bfseries Convolutional Layer:}
\begin{itemize}
    \item Functionality: Extracts low-level features from the input images using convolutional filters. This layer is responsible for detecting edges, textures, and patterns associated with speed bumps and potholes.


\item Architecture: Comprises 37 convolutional filters of size 3x3. The filters slide over the image to capture fine details without losing resolution due to the absence of stride and pooling operations.
\end{itemize}
  \item {\bfseries Batch Normalization and ReLU Activation:}

\begin{itemize}
    \item Functionality: Normalizes the output of each convolutional layer and applies ReLU activation to introduce non-linearity, ensuring the model can learn complex patterns.
    \item Architecture: Follows each convolutional layer with batch normalization to speed up training and enhance model stability, and ReLU for efficient non-linear transformations.
\end{itemize}
  \item {\bfseries Fully Connected Layer and SoftMax Output:}

\begin{itemize}
    \item Functionality: Maps the learned features to the final output classes (speed bump, pothole, normal road). The SoftMax function converts these outputs into probability scores for each class.
    
    \item Architecture: The fully connected layer processes the flattened feature maps from the convolutional layers and outputs a 3-class prediction, with the SoftMax layer ensuring that probabilities sum to 1.

\end{itemize}

 \item {\bfseries Loss Function:}

\begin{itemize}
\item Functionality: Optimizes the model by calculating the discrepancy between predicted classifications and ground truth labels.

\item Architecture: Uses Mean Squared Error (MSE) for calculating frame-level and overall losses, while cross-entropy loss is applied to optimize classification tasks. The loss function ensures the model accurately detects road anomalies.

\end{itemize}
\end{enumerate}

%=========================================
%=========================================
\chapter{EXPERIMENTS}
\thispagestyle{fancy}
\onehalfspacing
\hspace*{1cm}
In this section, a series of experiments were conducted to evaluate and improve the detection of speed bumps and potholes using a deep neural network. These experiments were focused on testing different configurations of CNN (Convolutional Neural Networks) and assessing their impact on the accuracy of detecting road anomalies from images captured by a ZED camera. By systematically analyzing various model structures, these experiments provide insights into how different neural network architectures affect the detection of bumps and potholes in real-world environments.
\section{DATASET}
The experiment utilized a carefully prepared dataset of road images captured in real urban environments using a ZED camera mounted on the front of a vehicle. The dataset was categorized into three different scenarios:
\begin{enumerate}
    \item {\bfseries Scenario 1: Speed Bumps}

This scenario includes 179 images of speed bumps, further divided into two groups: 134 images of marked yellow speed bumps and 35 images of unmarked speed bumps. These images were collected from roads where the camera was positioned to capture bumps from different angles and lighting conditions.
 \item {\bfseries Scenario 2: Potholes}

A total of 231 images depicting potholes were used. These images show various potholes of different sizes and shapes, captured under varying lighting conditions, simulating the real-world scenarios a vehicle might encounter.

\item {\bfseries Scenario 3: No Anomalies}

This subset contains 304 images of roads without any visible anomalies such as speed bumps or potholes. These images were used to test the model’s ability to correctly identify the absence of road irregularities.

\end{enumerate}
The dataset's variety in lighting, marking, and road surface quality made it ideal for testing the model’s robustness in detecting speed bumps and potholes.

\section{IMPLEMENTATION DETAILS}
This section details the technical setup used in the experiments, including model architectures, training methodologies, and hardware configurations.
\begin{enumerate}
    \item {\bfseries Convolutional Neural Network (CNN) Models:}

The core of the implementation consisted of CNN models built with seven layers. These included convolutional layers for feature extraction, ReLU (Rectified Linear Unit) activation functions, and a SoftMax output layer for classification. Several different architectures were tested by varying the number of filters and the size of the convolution kernels to optimize model performance.

 \item {\bfseries Training Process:}

The models were trained using MATLAB 2019a on a system equipped with an Intel i9-10900X CPU. The dataset was split into a 70\% training set and a 30\% validation set. The Stochastic Gradient Descent with Momentum (SGDM) optimizer was employed to adjust the model weights and ensure a faster convergence.

\item {\bfseries Hyperparameter Tuning:}

Hyperparameters like the number of filters and the size of convolutional kernels were systematically varied across different models. The model that performed best, labeled Model 5, utilized 37 filters with a 3x3 kernel size. This configuration achieved an accuracy of 98.13\% during validation, making it the most effective architecture.

\end{enumerate}


\section{EVALUATION}
The evaluation of the deep neural network models involved both subjective and objective methods to assess their performance in detecting speed bumps and potholes.
\begin{enumerate}
    \item {\bfseries Subjective Evaluation: Feature Map Analysis}

Visual inspection of feature maps from the CNN layers helped understand how well the models detected important features like speed bump edges and pothole textures, providing a qualitative measure of model effectiveness.



 \item {\bfseries Objective Assessment: Classification Accuracy}

Classification accuracy was the key metric for evaluating model performance. Model 5, which used 37 filters with a 3x3 pixel size, achieved an accuracy of 98.13\%, making it the most successful in detecting road anomalies. This model outperformed other configurations, proving that filter optimization played a significant role in improving detection accuracy.



\end{enumerate}
These evaluations demonstrated the effectiveness of the models, with Model 5 showing the highest accuracy in identifying road conditions.
%=========================================
%=========================================
\chapter{ RESULTS AND DISCUSSION }
\thispagestyle{fancy}
\onehalfspacing
\hspace*{1cm}

This section presents the results and discussion of the outcomes obtained using the proposed deep neural network models for detecting speed bumps and potholes with images captured through a ZED camera. The discussion focuses on the performance evaluation of the models, emphasizing their accuracy, and provides an analysis of the observed limitations and considerations.

\section{\bfseries Limitations and Considerations}


\begin{enumerate}
    \item {\bfseries Image Quality and Lighting Conditions: }The effectiveness of the detection process is influenced by the quality of the captured images, particularly under challenging lighting conditions such as low light or direct sunlight, which may degrade image clarity.
    \item {\bfseries Model Generalization: }Despite achieving high accuracy on the provided dataset, the model's performance might be less robust when applied to unseen data or different geographical locations due to variations in road anomaly characteristics.
    
    \item {\bfseries Data Imbalance: }The training dataset had a higher representation of speed bumps compared to potholes, which could potentially introduce a bias in the model’s predictions, affecting its generalization capabilities.

\end{enumerate}




\section{\bfseries MODEL PERFORMANCE RESULTS}
\begin{enumerate}
    \item {\bfseries Generalization Validation: }The deep neural network's generalization capability was validated using metrics like accuracy, precision, and recall. Model 5 demonstrated superior performance with an accuracy of 98.13\%, making it the most effective among the tested models.
    \item {\bfseries Comparison of Models: }The comparative analysis of different model architectures indicated that Model 5, utilizing 37 filters of size 3 × 3, outperformed other configurations, highlighting its ability to capture detailed features essential for distinguishing speed bumps and potholes.

        \begin{figure}[hbtp]
    \centering
    \includegraphics[scale=0.5]{fig 13.png}
    \vspace{.5cm}
    \caption{Model 5 accuracy with 37 filters of 3 × 3 pixels.}
    \label{fig:Scatter Plot}
\end{figure}
\end{enumerate}

\section{\bfseries Limited Training Data Results}
\begin{enumerate}
    \item {\bfseries Filter Size Impact: }It was observed that smaller filter sizes, such as 3 × 3, yielded better performance in terms of extracting intricate image details, significantly enhancing the model's detection capabilities for speed bumps and potholes.
    \item {\bfseries Training and Validation Performance: }The progression of training and validation revealed that an increase in filter size or quantity could lead to overfitting, thus negatively 
    impacting the model's accuracy.
    
        \begin{figure}[hbtp]
    \centering
    \includegraphics[scale=0.4]{fig 12.png}
    \vspace{.5cm}
    \caption{Model 4 accuracy with 37 filters of 7 × 7 pixels}
    \label{fig:Small Dataset Result}
\end{figure}
\end{enumerate}

\section{\bfseries Knowledge Distillation Results}
\begin{enumerate}
    \item {\bfseries Feature Extraction Analysis: }The convolutional layers efficiently extracted relevant features from the input images, as evidenced by the feature maps generated during the training process. This capability played a crucial role in distinguishing between different road anomalies.

    \item {\bfseries Batch Normalization Effectiveness:} Incorporating a batch normalization layer into the neural network architecture enhanced training stability and reduced sensitivity to initial weight settings, contributing to improved model accuracy.
    
    \begin{figure}[hbtp]
    \centering
    \includegraphics[scale=0.4]{fig 17.png}
    \vspace{.5cm}
    \caption{Feature extraction by Layer 4 with 37 filters.}
    \label{fig:Large Dataset Result}
\end{figure}
\end{enumerate}

\section{\bfseries Ablation Studies}
\begin{enumerate}
    \item {\bfseries Evaluation of Filter Configurations: }Ablation studies validated that the configuration of 3 × 3 filters provided the highest accuracy and computational efficiency, emphasizing the importance of retaining image detail without resorting to pooling or stride operations.

    \item {\bfseries Impact of Data Augmentation:}Additional experiments highlighted the benefits of data augmentation techniques in enhancing the robustness and reliability of the model, particularly in diverse real-world conditions.
    
        \begin{figure}[hbtp]
    \centering
    \includegraphics[scale=0.5]{fig 9.png}
    \vspace{.5cm}
    \caption{Model 1 accuracy with 36 filters of 5 × 5 pixels.}
    \label{fig:Ablation Study Result}
\end{figure}
\end{enumerate}
%=========================================
%=========================================


\chapter{CONCLUSION}
\thispagestyle{fancy}


{{conclusion_content_of_paper}}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\newpage


\pagestyle{plain}
\appendix

\clearpage
\appendix
\renewcommand{\thechapter}{\Roman{chapter}}
\pagenumbering{roman}% resets page counter to 1
\renewcommand*{\thepage}{\roman{page}}
\setcounter{page}{12} %%%% Change this number to resume the roman numbering
\addcontentsline{toc}{section}{\textnormal{\textbf{REFERENCES}}}
\bibliographystyle{IEEEtran}
\bibliography{IEEEabrv,refer}   
%Refer a1.bib for entering editing the referemces in bibtex file. Bibtex entries can be downloaded from google scholar /  journal pages using "Cite" option
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55
%%%%% Attach the base/reference papers using the code below. Upload the files to the directory of tex file.
%\chapter{Paper Publications and Achievements}
%include the list of Achievements and Paper Publications
%\begin{enumerate}
%    \item ......
%    \item ......
 %   \item ......
%\end{enumerate}
%include the pdf of Paper Publications
\cite{secretaria2020estadistica}
\cite{corro2023joven}
\cite{alshargabi2020novel}
\cite{bello2018new}
\cite{celaya2018speed}
\cite{martinez2014identifying}
\cite{shah2019pothole}
\cite{varma2018real}
\cite{maeda2018road}
\cite{villaseor2022fuzzy}
\cite{tai2010automatic}


%\chapter{Code}
\includepdf[pages=-,pagecommand=\thispagestyle{plain}]{research paper.pdf}
\end{document}
`;