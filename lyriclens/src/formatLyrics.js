export function formatLyrics(lyrics) {
  return lyrics
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}

 FAIL  lyriclens/src/formatLyrics.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation, specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /home/AshantiC/Documents/Lyriclens/lyriclens/src/formatLyrics.test.js: Missing semicolon. (11:5)

       9 | });
      10 |
    > 11 |  FAIL  lyriclens/src/formatLyrics.test.js
         |      ^
      12 |   formatLyrics
      13 |     ✕ removes extra blank lines from lyrics (2 ms)
      14 |

      at constructor (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parse-error.ts:91:19)
      at JSXParserMixin.raise (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/tokenizer/index.ts:1445:19)
      at JSXParserMixin.semicolon (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/util.ts:149:10)
      at JSXParserMixin.parseExpressionStatement (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:1168:10)
      at JSXParserMixin.parseStatementContent (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:562:19)
      at JSXParserMixin.parseStatementLike (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:363:17)
      at JSXParserMixin.parseModuleItem (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:300:17)
      at JSXParserMixin.parseBlockOrModuleBlockBody (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:1248:16)
      at JSXParserMixin.parseBlockBody (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:1222:10)
      at JSXParserMixin.parseProgram (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:110:10)
      at JSXParserMixin.parseTopLevel (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/statement.ts:88:25)
      at JSXParserMixin.parse (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/parser/index.ts:86:25)
      at parse (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/node_modules/@babel/parser/src/index.ts:84:38)
      at parse (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/src/parser/index.ts:29:14)
          at parser.next (<anonymous>)
      at normalizeFile (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/src/transformation/normalize-file.ts:48:18)
          at normalizeFile.next (<anonymous>)
      at run (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/src/transformation/index.ts:41:23)
          at run.next (<anonymous>)
      at transform (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/src/transform.ts:28:17)
          at transform.next (<anonymous>)
      at evaluateSync (node_modules/gensync/index.js:251:28)
      at sync (node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (file:/home/AshantiC/Documents/Lyriclens/node_modules/@babel/core/src/transform.ts:59:52)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/index.js:415:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/index.js:512:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/index.js:551:19)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.776 s, estimated 1 s
Ran all test suites.
