<template lang="">
  <div>
    <button
    type="button"
    class='base'
    @click.prevent="submit"
    >
Sign out</button>
  </div>
</template>
<script>
export default {

  setup() {
    const submit = () => {
      // cookies.delete("session")
      document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload()
    }
    return {
      submit
    }
  }
}
</script>
<style lang="scss">
//palette
$green: #a2ccb6;
$light-peach: #ffecd9;
$peach: #ee786e;
$sand: #fceeb5;
$white: #fff;



.base {
  -webkit-appearance: none;
  background: -webkit-gradient(to right, $green 0%, $sand 50%, $peach 100%);
  background: linear-gradient(to right, $green 0%, $sand 50%, $peach 100%);
  background-size: 500%;
  border: none;
  border-radius: 5rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  color: $white;
  cursor: pointer;
  font: 1.1em Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 3rem;
  letter-spacing: .05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 90%;
}

.base:hover {
  animation-name: gradient;
  -webkit-animation-name: gradient;
  animation-duration: 2s;
  -webkit-animation-duration: s;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100%;
  }
}

;
</style>



<!-- ---
interface Props {
  id?: string;
  name?: string;
  _class?: string;
  classList?: string;
  label: string;

}

let { id, name, _class, classList ,label} = Astro.props;
---

<div>
  <button
    id={id}
    name={name}
    type="button"
    class='base'
    class:list={classList}>
{label}</button>
</div>

<style lang="scss">

//palette
$green: #a2ccb6;
$light-peach: #ffecd9;
$peach: #ee786e;
$sand: #fceeb5;
$white: #fff;



.base {
  -webkit-appearance: none;
  background: -webkit-gradient(to right,$green 0%,$sand 50%,$peach 100%);
  background: linear-gradient(to right,$green 0%,$sand 50%,$peach 100%);
  background-size: 500%;
  border: none;
  border-radius: 5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  color: $white;
  cursor: pointer;
  font: 1.5em Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 3rem;
  letter-spacing: .05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 90%;
}
.base:hover {
  animation-name: gradient;
  -webkit-animation-name: gradient;
  animation-duration: 2s;
  -webkit-animation-duration: s;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100%;
  }
};
</style> -->
