document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');
 if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const stories={
  'corps-health':{title:'Ogu/Bolo Council Begins Capturing Corps Members for Free Healthcare Scheme',date:'Posted 27 October 2026, 12:15 WAT',by:'Ogu/Bolo LGA Media and Communication Unit',source:'Announcement supplied for publication by the user',body:[
   'The Ogu/Bolo Local Government Council has commenced the registration and capturing of National Youth Service Corps (NYSC) members serving in the LGA into its free healthcare scheme, fulfilling a promise made by the Executive Chairman, Chief Vincent Nemieboka Esq.',
   'The initiative is aimed at ensuring that corps members posted to Ogu/Bolo to contribute to the education and development of local communities have access to free healthcare whenever they experience health challenges during their service year.',
   'The move reflects the council’s stated commitment to the welfare of corps members and recognition of their contributions to education and community development across Ogu/Bolo Local Government Area.',
   'The supplied announcement says the free healthcare initiative was announced alongside a ₦30,000 monthly stipend for corps members serving in the LGA. Eligible corps members are encouraged by the announcement to participate in the registration exercise.',
   'Media and Communication Unit, Ogu/Bolo LGA.'
  ],contentHtml:'<figure><img src="images/corps-health-capturing-1.jpg" alt="A corps member being registered for the Ogu/Bolo free healthcare scheme"><figcaption>Registration and capturing for the free healthcare scheme.</figcaption></figure><figure><img src="images/corps-health-capturing-2.jpg" alt="Corps members seated during the healthcare scheme capturing exercise"><figcaption>Corps members attending the capturing exercise.</figcaption></figure><figure><img src="images/corps-health-capturing-3.jpg" alt="A staff member assisting a corps member during the registration exercise"><figcaption>Registration assistance during the exercise.</figcaption></figure>'},
  solar:{title:'Fubara Flags Off 11.9MW Solar Mini-Grid In Bolo',date:'11 July 2026',by:'Owupele Benebo',source:'Rivers State Ministry of Information & Communications',url:'https://moic.rv.gov.ng/fubara-flags-off-11-9mw-solar-mini-grid-in-bolo/',body:[
   'The Rivers State Governor, Sir Siminalayi Fubara, flagged off the construction and installation of an 11.9 Megawatt Peak (MWp) solar mini-grid project in Bolo Town, Ogu/Bolo Local Government Area, at a groundbreaking ceremony.',
   'The report says the project is being executed in partnership with the Rural Electrification Agency (REA) to expand access to clean and renewable energy. The governor, represented by Deputy Governor Prof. Ngozi Nma Odu, described reliable and affordable electricity as a driver of economic growth and development.',
   'The report says the project is expected to support homes, businesses, educational institutions, healthcare facilities and the local economy, while creating opportunities and reducing reliance on fossil fuels. The governor urged the host community to protect the facilities, support contractors and cooperate with stakeholders during construction.',
   'REA Managing Director Abba Aliyu said the initiative aligns with federal efforts to expand electricity access. The Ministry report also records remarks from the Rivers State Ministry of Power and the Ogu/Bolo LGA Chairman about the expected long-term benefits for Bolo and neighbouring communities.'
  ]},
  councillors:{title:'Nimieboka Swears-in 6 Supervisory Councillors',date:'14 November 2025',by:'Gabriel Obietonye',source:'Rivers State Ministry of Information & Communications',url:'https://moic.rv.gov.ng/nimieboka-swears-in-6-supervisory-councillors/',body:[
   'The Rivers State Ministry of Information & Communications reported that Ogu/Bolo LGA Chairman Barr. Vincent Nemieboka swore in six newly appointed Supervisory Councillors who had been screened and confirmed by the 8th Legislative Assembly of the Local Government.',
   'The councillors named in the report are Hon. Ibibofori Tamunodikibalafa, Hon. Gift Iwaritaribi, Hon. Omiebi Nicholas Evans, Hon. Tokunengiyeofori Stella Harold, Hon. Abika Alpheaus and Hon. Bomasimetamunopiri Praise Igah.',
   'The chairman charged the appointees to carry out their duties diligently and responsibly, emphasising teamwork and dedication to the development of the LGA.',
   'Speaking on behalf of the appointees, Vice Chairman Dr. Eunice Alabo, who also serves as Supervisory Councillor for Health, thanked the chairman and said the supervisors were committed to effective public service.',
   'The report also said the chairman announced plans for an empowerment programme targeting women, youths, first-class graduates, students studying law and medicine, and other professional disciplines. The article was written by Gabriel Obietonye, Head of the Ogu/Bolo LGA Information and Public Relations Unit.'
  ]}
 };
 let modal;
 function ensureModal(){if(modal)return modal;modal=document.createElement('div');modal.className='article-reader';modal.id='article-reader';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-labelledby','reader-title');modal.innerHTML='<article class="reader-panel article-page-layout"><button class="reader-close" type="button" aria-label="Close article">× Close</button><p class="reader-source" id="reader-source"></p><h2 id="reader-title"></h2><p class="reader-meta" id="reader-meta"></p><div id="reader-content" class="reader-content"></div><p class="reader-footnote">This article is presented on the Ogu/Bolo website. Where a source link is available, use it to read the publisher’s original report.</p><p class="reader-original-link" id="reader-original-link"></p></article>';document.body.appendChild(modal);modal.querySelector('.reader-close').onclick=()=>modal.classList.remove('open');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});return modal;}
 function readStory(s){const m=ensureModal();m.querySelector('#reader-source').textContent=s.source||'News & Updates';m.querySelector('#reader-title').textContent=s.title||'News article';m.querySelector('#reader-meta').textContent=[s.date,s.by].filter(Boolean).join(' · ');const content=m.querySelector('#reader-content');content.replaceChildren();const original=m.querySelector('#reader-original-link');original.replaceChildren();if(s.url){const link=document.createElement('a');link.href=s.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Read the original report from the publisher →';original.appendChild(link)}let htmlDiv=null;if(s.contentHtml){htmlDiv=document.createElement('div');htmlDiv.className='article-inline-media';htmlDiv.innerHTML=s.contentHtml;}if(s.imageUrl){const img=document.createElement('img');img.src=s.imageUrl;img.alt=s.title||'News photograph';img.className='reader-feature-photo';img.loading='lazy';content.appendChild(img)}else if(htmlDiv){const firstFigure=htmlDiv.querySelector('figure');if(firstFigure){const hero=firstFigure.cloneNode(true);hero.classList.add('article-lead-image');content.appendChild(hero);firstFigure.remove()}else{const firstImg=htmlDiv.querySelector('img');if(firstImg){const hero=firstImg.cloneNode(true);hero.classList.add('reader-feature-photo');content.appendChild(hero);firstImg.remove()}}}(s.body||[]).forEach(p=>{const el=document.createElement('p');el.textContent=p;content.appendChild(el)});if(htmlDiv&&htmlDiv.childNodes.length){content.appendChild(htmlDiv)}m.classList.add('open');m.querySelector('.reader-close').focus();}
 document.querySelectorAll('[data-read-article]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();readStory(stories[a.dataset.readArticle]||stories.solar)})});

 // Contact form: send to Netlify Forms
 document.querySelectorAll('form[data-netlify-ajax]').forEach(f=>{f.addEventListener('submit',async e=>{e.preventDefault();const st=f.querySelector('.form-status');if(!f.reportValidity())return;const btn=f.querySelector('button[type=submit]');btn.disabled=true;if(st)st.textContent='Sending…';try{const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()});if(!r.ok)throw new Error('failed');f.reset();if(st)st.textContent='Thank you. Your message has been sent to the council.'}catch(err){if(st)st.textContent='Could not send your message right now. Please try again later.'}btn.disabled=false})});
 // Council-posted news from the admin page (content/news.json)
 const cmsList=document.querySelector('#cms-news-list'),cmsHome=document.querySelector('.news-cards');
 if(cmsList||cmsHome){
  const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=d=>{const x=new Date(d);return isNaN(x)?'':x.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})};
  fetch('content/news.json',{cache:'no-store'}).then(r=>r.ok?r.json():{posts:[]}).then(data=>{
   const posts=(data.posts||[]).filter(p=>p&&p.title).sort((a,b)=>new Date(b.date)-new Date(a.date));
   if(!posts.length)return;
   posts.forEach((p,i)=>{
    const photos=(p.photos||[]).filter(x=>x&&x.image);
    stories['cms-'+i]={title:p.title,date:fmt(p.date),by:p.author||'Ogu/Bolo LGA Media and Communication Unit',source:p.source||'Ogu/Bolo Local Government Area',url:p.source_url||'',imageUrl:photos[0]?photos[0].image:'',
     body:String(p.body||'').split(/\n\s*\n/).map(t=>t.trim()).filter(Boolean),
     contentHtml:photos.slice(1).map(x=>'<figure><img src="'+esc(x.image)+'" alt="'+esc(x.caption||p.title)+'">'+(x.caption?'<figcaption>'+esc(x.caption)+'</figcaption>':'')+'</figure>').join('')};
   });
   if(cmsList){
    posts.forEach((p,i)=>{
     const img=(p.photos&&p.photos[0]&&p.photos[0].image)||'';
     const card=document.createElement('article');card.className='news-story';
     card.innerHTML=(img?'<img class="news-original-photo" src="'+esc(img)+'" alt="'+esc(p.title)+'" loading="lazy">':'<div class="story-top"></div>')+'<div class="card-body"><span class="news-category">'+esc(p.category||'News')+'</span><h3>'+esc(p.title)+'</h3><p class="news-byline">'+esc(fmt(p.date))+'</p><p>'+esc(p.summary||'')+'</p><button class="btn green" type="button">Read on this website</button></div>';
     card.querySelector('button').addEventListener('click',()=>readStory(stories['cms-'+i]));
     cmsList.appendChild(card);
    });
   }
   if(cmsHome){
    const cards=posts.slice(0,3).map((p,i)=>{
     const img=(p.photos&&p.photos[0]&&p.photos[0].image)||'';
     const card=document.createElement('article');card.className='card news-card';
     card.innerHTML=(img?'<img class="news-card-photo" src="'+esc(img)+'" alt="'+esc(p.title)+'" loading="lazy">':'')+'<div class="card-body"><p class="news-meta">'+esc(fmt(p.date))+'</p><span class="tag">'+esc(p.category||'News')+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.summary||'')+'</p><a href="news.html">Read full story here</a></div>';
     card.querySelector('a').addEventListener('click',e=>{e.preventDefault();readStory(stories['cms-'+i])});
     return card;
    });
    cmsHome.prepend(...cards);
    while(cmsHome.children.length>3)cmsHome.lastElementChild.remove();
   }
  }).catch(()=>{});
 }
 // Live list: fetch paginated posts from the Ministry's public WordPress feed.
 const live=document.querySelector('#live-news-list');
 if(live && live.dataset.enableLiveFeed === 'true'){
   let livePage=1, liveBusy=false, liveHasMore=true;
   const loadButton=document.querySelector('#load-more-news');
   const moreStatus=document.querySelector('#more-news-status');
   const status=document.querySelector('#live-news-status');
   function makeLiveCard(post){
     const media=post._embedded&&post._embedded['wp:featuredmedia']&&post._embedded['wp:featuredmedia'][0];
     const imageUrl=media&&(media.source_url||(media.media_details&&media.media_details.sizes&&media.media_details.sizes.full&&media.media_details.sizes.full.source_url));
     const titleText=(post.title&&post.title.rendered||'Community update').replace(/<[^>]*>/g,'');
     const card=document.createElement('article');card.className='news-story';
     if(imageUrl){const img=document.createElement('img');img.className='news-original-photo';img.src=imageUrl;img.alt=media.alt_text||titleText;img.loading='lazy';img.decoding='async';card.appendChild(img)}else{const top=document.createElement('div');top.className='story-top';card.appendChild(top)}
     const body=document.createElement('div');body.className='card-body';
     const category=document.createElement('span');category.className='news-category';category.textContent='Ministry report';
     const date=document.createElement('p');date.className='news-byline';date.textContent=post.date?new Date(post.date).toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'}):'Latest update';
     const title=document.createElement('h3');title.textContent=titleText;
     const summary=document.createElement('div');summary.className='live-summary';summary.innerHTML=(post.excerpt&&post.excerpt.rendered)||'';
     const btn=document.createElement('button');btn.className='btn green';btn.type='button';btn.textContent='Read on this website';
     btn.addEventListener('click',()=>readStory({title:title.textContent,date:date.textContent,source:'Rivers State Ministry of Information & Communications',contentHtml:(post.content&&post.content.rendered)||summary.innerHTML,imageUrl:imageUrl}));
     body.append(category,title,date,summary,btn);card.appendChild(body);return card;
   }
   async function loadLivePage(page,append){
     if(liveBusy||!liveHasMore)return;liveBusy=true;
     if(loadButton){loadButton.disabled=true;loadButton.textContent='Loading…'}
     try{
       const response=await fetch('https://moic.rv.gov.ng/wp-json/wp/v2/posts?search=Ogu%2FBolo&per_page=10&page='+page+'&_embed=1',{headers:{'Accept':'application/json'}});
       if(!response.ok){if(response.status===400||response.status===404){liveHasMore=false}else throw new Error('Feed unavailable')}
       const posts=response.ok?await response.json():[];
       if(!Array.isArray(posts)||posts.length===0){liveHasMore=false;if(!append&&status)status.textContent='No matching live stories were returned. Please try again later.';if(moreStatus)moreStatus.textContent='No more stories available right now.'}
       else{
         if(!append)live.replaceChildren();
         posts.forEach(post=>{
           const postTitle=(post.title&&post.title.rendered||'').replace(/<[^>]*>/g,'');
           const embedded=post._embedded&&post._embedded['wp:featuredmedia']&&post._embedded['wp:featuredmedia'][0];
           const originalImage=embedded&&embedded.source_url;
           if(originalImage&&/solar-mini-grid-in-bolo/i.test((post.slug||'')+' '+(post.link||'')+' '+postTitle)){
             const featureArt=document.querySelector('.news-feature-art');
             if(featureArt){featureArt.replaceChildren();const img=document.createElement('img');img.src=originalImage;img.alt=embedded.alt_text||postTitle;img.className='news-feature-original-photo';img.loading='lazy';featureArt.appendChild(img)}
           }
           live.appendChild(makeLiveCard(post));
         });
         livePage=page;
         if(status)status.textContent='Live feed updated from the Ministry website. Select any story to read it here.';
         if(moreStatus)moreStatus.textContent='';
         if(posts.length<10)liveHasMore=false;
       }
     }catch(error){if(status)status.textContent='Live feed could not connect right now. Check your internet connection and refresh to retry.';if(moreStatus)moreStatus.textContent='Could not load more news. Please try again later.'}
     finally{liveBusy=false;if(loadButton){loadButton.disabled=false;loadButton.textContent=liveHasMore?'Load more news':'No more news available';loadButton.hidden=!liveHasMore}}
   }
   if(loadButton)loadButton.addEventListener('click',()=>loadLivePage(livePage+1,true));
   loadLivePage(1,false);
 }
});