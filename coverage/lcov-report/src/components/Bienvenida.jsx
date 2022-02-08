
<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for src/components/Bienvenida.jsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(../../sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1><a href="../../index.html">All files</a> / <a href="index.html">src/components</a> Bienvenida.jsx</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">100% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>0/0</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>0/1</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">0% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>0/2</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
        <template id="filterTemplate">
            <div class="quiet">
                Filter:
                <input oninput="onInput()" type="search" id="fileSearch">
            </div>
        </template>
    </div>
    <div class='status-line low'></div>
    <pre><table class="coverage">
<tr><td class="line-count quiet"><a name='L1'></a><a href='#L1'>1</a>
<a name='L2'></a><a href='#L2'>2</a>
<a name='L3'></a><a href='#L3'>3</a>
<a name='L4'></a><a href='#L4'>4</a>
<a name='L5'></a><a href='#L5'>5</a>
<a name='L6'></a><a href='#L6'>6</a>
<a name='L7'></a><a href='#L7'>7</a>
<a name='L8'></a><a href='#L8'>8</a>
<a name='L9'></a><a href='#L9'>9</a>
<a name='L10'></a><a href='#L10'>10</a>
<a name='L11'></a><a href='#L11'>11</a>
<a name='L12'></a><a href='#L12'>12</a>
<a name='L13'></a><a href='#L13'>13</a>
<a name='L14'></a><a href='#L14'>14</a>
<a name='L15'></a><a href='#L15'>15</a>
<a name='L16'></a><a href='#L16'>16</a>
<a name='L17'></a><a href='#L17'>17</a>
<a name='L18'></a><a href='#L18'>18</a>
<a name='L19'></a><a href='#L19'>19</a>
<a name='L20'></a><a href='#L20'>20</a></td><td class="line-coverage quiet"><span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-no">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span>
<span class="cline-any cline-neutral">&nbsp;</span></td><td class="text"><pre class="prettyprint lang-js">import React from 'react';
import { Link } from 'react-router-dom';
import logopink  from '../assets/img/logopink.png'
&nbsp;
const Bienvenida = <span class="cstat-no" title="statement not covered" ><span class="fstat-no" title="function not covered" >()</span> =&gt; {</span>
<span class="cstat-no" title="statement not covered" >  return (</span>
     &lt;main className=' flex flex-col items-center content-center'&gt;
      &lt;div&gt;
      &lt;img id= 'log' src={logopink} alt='logo silencio Bruno' className='mx-auto mt-12'&gt;&lt;/img&gt;
      &lt;/div&gt;
      &lt;div id= 'btn-enter'&gt;
      &lt;Link to = {`/login`} &gt; &lt;button 
      className="h-18 py-5 px-9 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-800 text-lg font-bold"&gt; Iniciar sesión &lt;/button&gt;&lt;/Link&gt;
      &lt;/div&gt;
  &lt;/main&gt;
  )
};
&nbsp;
export default Bienvenida;
&nbsp;</pre></td></tr></table></pre>

                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank" rel="noopener noreferrer">istanbul</a>
                at Mon Feb 07 2022 21:50:23 GMT-0300 (hora de verano de Chile)
            </div>
        <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="../../sorter.js"></script>
        <script src="../../block-navigation.js"></script>
    </body>
</html>
    