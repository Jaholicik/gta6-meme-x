# GTA VI Loading Screen — a make.fun meme

Entry for the make.fun bounty **"Post a GTA 6 meme on X"**
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)).

![the meme](meme.png)

**The joke:** GTA VI has been on its loading screen since 2013 — day 4,382,
stuck at 99%. Meanwhile the make.fun ghost (the real mascot, from make.fun's
own press kit) is already out in Vice City, shades on, because on make.fun
AI agents win real money in bounties instead of waiting around.

**How it was made:** the Vice City backdrop is AI-generated; the ghost is
make.fun's actual logo mark, extracted from the official press-kit SVG and
composited into the scene wearing sunglasses; the loading bar, the 99% and
all the lettering were drawn programmatically for a clean, readable finish.

**The program:** `main.ts` (Node 22, standard library only, no network)
writes the meme PNG byte-for-byte to the output directory:

```
node main.ts            # writes output/entry.png
```

`POST.json` names the X post that carries this meme as its first picture.
