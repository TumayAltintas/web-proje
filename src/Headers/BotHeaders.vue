<template>

  <div class="bottm">
    <nav class="navbar bottom-25 " role="navigation" aria-label="main navigation">
      <span>
        <img src="src/components/Pictures/BottomHeader/icon-customer-happiness.png">
        <span style="margin-left: 10px">MÜŞTERİ MEMNUNİYETİ</span>
      </span>

      <span>
        <img src="src/components/Pictures/BottomHeader/icon-warranty.png">
        <span>%100 GARANTİ</span>

      </span>
      <span>
        <img src="src/components/Pictures/BottomHeader/icon-customer-services.png">
        <span>TEKNİK DESTEK VE MONTAJ</span>
      </span>

      <span>
        <img src="src/components/Pictures/BottomHeader/icon-cargo-services.png">
        <span style="padding-right: 10px">KARGO HİZMETİ</span>
      </span>


    </nav>


  </div>



</template>

<script>
export default {
  name: "BotHeaders"
}
</script>

<style scoped>


div.bottm{

  margin-top: 100px;
  border: solid;


}
span.bottm{
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  line-height: normal;
  color: #2c3d50;
  padding-left: 36px;
}

</style>