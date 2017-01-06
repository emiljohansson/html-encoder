import test from 'ava'
import encode from '.'

test(t => {
  const expected = '&lt;span&gt;Hello&lt;/span&gt;'
  const actual = encode('<span>Hello</span>')
  t.is(actual, expected)
})

test(t => {
  const expected = '&lt;span&nbsp;class=&quot;hello&quot;&nbsp;data-style=&apos;{&quot;fill&quot;:&nbsp;[&quot;#0000ff&quot;,&nbsp;&quot;#ff0000&quot;]}&apos;&nbsp;style=&quot;display:&nbsp;none;&quot;&gt;Hello&lt;/span&gt;'
  const actual = encode('<span class="hello" data-style=\'{"fill": ["#0000ff", "#ff0000"]}\' style="display: none;">Hello</span>')
  t.is(actual, expected)
})
